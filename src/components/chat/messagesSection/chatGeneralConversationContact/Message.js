import React, { Component } from 'react';
import { connect } from 'react-redux';
import DotsMenu from './dotsMenu';
import FileHelper from './../../../../lib/helper/fileHelper';
import MapPosition from './../../../../lib/helper/mapPosition';
import { filterMessages } from '../../../../redux/actions/messagesOptions/messagesOptions';
import MessagesHelper from '../../../../lib/helper/messagesHelper';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuState: false,
            blockedMenu: false,
        }
    }

    componentDidMount() {
        this.bubble.addEventListener('mouseenter', this.showDots);
        this.bubble.addEventListener('mouseleave', this.showDots);
    }

    componentWillUnmount() {
        this.bubble.removeEventListener('mouseenter', this.showDots);
        this.bubble.removeEventListener('mouseleave', this.showDots);
    }

    showDots = () => {
        (!this.props.multiSelect && !this.props.messageSelected) ?
            (!this.state.blockedMenu) && this.setState({
                menuState: !this.state.menuState
            }) : this.setState({ menuState: false });
    }

    blockView = (state) => {
        this.setState({
            blockedMenu: !this.state.blockedMenu,
        });
    }

    checked = (e) => {
        this.props.filterMessages(e.target.checked, this.props.messageObject.id);
        this.row.style.backgroundColor = (!e.target.checked) ? '' : 'rgba(217,230,245, 0.5)';
    }

    componentWillUpdate = (state) => {
        if (state.multiSelect) {
            this.bubble.style.marginRight = '30px'
        } else {
            this.bubble.style.marginRight = '0px'
            this.row.style.backgroundColor = '';

        }
    }

    render() {
        let { id, message, hour } = this.props.messageObject;
        let { type, tail, tailType, user_icon } = this.props;
        return (
            <div ref={div => { this.row = div }} id={`message_row_${id}`} className="message-row">
                {(type === "message-out") && <img className="img-icon-user chat-icon" src={user_icon} alt="" />}
                <div id={`message_${id}`} ref={div => { this.bubble = div }} className={`message-bubble ${type}`}>
                    <div className={`message-wrapper ${(message.type) ? 'no-text' : ''}`}>
                        <span className={`tail ${tailType}`} style={{ backgroundImage: `url(${tail})` }}></span>
                        <div className="message">{
                            !(message instanceof Object) ? message : this.MessageContent(message, id, this.props.contacts)
                        }</div>
                        <div className="time-content">
                            <span className="time">{hour}</span>
                        </div>
                    </div>
                    {
                        (this.state.menuState) &&
                        <DotsMenu conversationId={this.props.conversationId} blockView={this.blockView} contacts={this.props.contacts} showDots={this.showDots} display={this.state.menuState} id={id} type={type} selectable={this.state.selectable} />
                    }
                </div>
                {(this.props.multiSelect)
                    &&
                    <div className="select-message">
                        <input onChange={this.checked} type="checkbox" name="" id="" />
                    </div>
                }

            </div>
        );
    }

    MessageContent = (message, id, contacts) => {
        switch (message.type) {
            case "0":
                return (
                    <img id={`map${id}`} className="map" src={MapPosition.getMapURL(message.lat, message.lon, message.zoom)} alt="" />
                );
            case "1":
                return (
                    <video controls>
                        <source src={message.src} />
                    </video>
                );
            case "2":
                return (
                    <AudioMessage message={message} />
                );
            case "3":
                return (
                    <div className="file">
                        <img src={this.props.file_icon} alt="file-icon" />
                        <div className="file-info">
                            <a href={message.blobURL} download={message.fileName} className="download-icon">
                                <img src={this.props.download_icon} alt="" />
                            </a>
                            <span>{FileHelper.humanFileSize(message.size, true)}</span>
                            <span>{message.fileName.split('.')[0]}</span>
                        </div>
                    </div>
                );
            case "4":
                return (
                    <ReplyMessage contacts={contacts} message={message} senderId={message.toWhoReply} />
                );
            default:
                return <div></div>;
        }
    }
}

class AudioMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: '00:00',
            playing: false,
            currentPercent: '0',
        }
    }
    onChange = (e) => {
        this.audioElement.currentTime = (e.target.value* this.maxTime)/100 ;
    }
    onPlay = (e) => {
        this.audioElement.play();
        this.setState({ playing: true });
        this.maxTime = this.audioElement.duration;
    }
    onPause = () => {
        this.audioElement.pause();
        this.setState({ playing: false });
    }
    onTimeUpdate = (e) => {
        this.setState({
            currentTime: new Date(e.target.currentTime * 1000).toISOString().substr(14, 5),
            currentPercent: (e.target.currentTime * 100) / this.maxTime
        });
        this.seek.value = (e.target.currentTime * 100) / this.maxTime ;
    }
    render() {
        return (
            <div className="audio-message">
                {(!this.state.playing)
                    ? <img onClick={this.onPlay} src={this.props.play_icon} alt="" />
                    : <img onClick={this.onPause} src={this.props.pause_icon} alt="" />
                }
                <span>{(this.state.currentTime) && this.state.currentTime}</span>
                <div>
                    <div className="seek-section">
                        <span style={{ width: `${this.state.currentPercent}%` }}></span>
                        <input disabled={true} ref={seek => { this.seek = seek }} onChange={this.onChange} type="range" min="0" max="100" defaultValue="0" />
                    </div>
                </div>

                <audio
                    onTimeUpdate={this.onTimeUpdate}
                    onEnded={() => {
                        this.setState({ playing: false });
                        this.audioElement.currentTime = 0
                    }}
                    ref={audio => { this.audioElement = audio }}
                    src={this.props.message.src}>
                </audio>
            </div>
        )
    }
}
AudioMessage = connect(state => ({
    play_icon: state.customizing.Images.play_icon,
    pause_icon: state.customizing.Images.pause_icon,
}))(AudioMessage);

let ReplyMessage = (props) => {
    return (
        <div>
            <div className="reply">
                <div className="content">
                    <span className="owner">{
                        (props.senderId === props.userId) ? 'tu' :
                            MessagesHelper.getOwner(props.contacts, props.senderId)
                    }</span>
                    <div className="toReply">{props.message.toReply}</div>
                </div>
            </div>
            {props.message.message}
        </div>
    );
}
ReplyMessage = connect((state) => ({
    userId: state.users.id
}))(ReplyMessage);

const mapStateToProps = (state) => {
    return {
        file_icon: state.customizing.Images.file_icon,
        multiSelect: state.messagesOptions.multiSelect,
        messageSelected: state.messagesOptions.messageSelected,
        download_icon: state.customizing.Images.download_icon,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        filterMessages: (action, message) => {
            dispatch(filterMessages(action, message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Message);