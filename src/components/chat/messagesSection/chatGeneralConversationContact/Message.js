import React, { Component } from 'react';
import { connect } from 'react-redux';
import DotsMenu from './dotsMenu';
import AudioMessage from './messagesTypes/audioMessage';
import ReplyMessage from './messagesTypes/replayMessage';
import FileHelper from './../../../../lib/helper/fileHelper';
import FileMessage from './messagesTypes/fileMessage';
import MapPosition from './../../../../lib/helper/mapPosition';
import { filterMessages } from '../../../../redux/actions/messagesOptions/messagesOptions';
import { Images } from "../../../../redux/states/images";
import DropMenu from "../../../utils/dropMenu";
import ControlMenuMessageHelper from '../../../../lib/helper/controlMenuMessage';


class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuState: false,
            blockedMenu: false,
            isMenuOpened: false
        }
        this.setOptionsMenu();
    }

    componentDidUpdate() {
        this.setOptionsMenu();
    }

    showDots = () => {
        (!this.props.multiSelect && !this.props.messageSelected) ?
            (!this.state.blockedMenu) && this.setState({
                menuState: !this.state.menuState
            }) : this.setState({ menuState: false });
    }

    blockView = (state) => {
        this.setState({
            blockedMenu: state,
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
        if (message.type) message.hour = hour;
        return (
            <div ref={div => { this.row = div }} id={`message_row_${id}`} className="message-row" onMouseLeave={() => this.blockView(false)} onMouseEnter={() => this.blockView(true)} >
                {(type === "message-out") && <img className="img-icon-user chat-icon" src={user_icon} alt="" />}
                <div id={`message_${id}`} ref={div => { this.bubble = div }} className={`message-bubble ${type}`}>
                    <div className={`message-wrapper ${(message.type) ? (message.type === '3') ? 'file-message' : 'no-text' : ''}`}>
                        <span className={`tail ${tailType}`} style={{ backgroundImage: `url(${tail})` }}></span>
                        <div className="message">{
                            !(message instanceof Object) ? message : this.MessageContent(message, id, this.props.contacts)
                        }</div>
                        <div className="time-content">
                            <span className="time">{hour}</span>
                        </div>
                    </div>
                    {
                        this.state.blockedMenu &&
                        <div className="menu-wrapper-message">
                            <img onClick={() => this.toggleMenu(!this.state.isMenuOpened)} ref={img => { this.dots = img }} className="dots-menu-message" src={Images.dots_menu} alt="" />
                        </div>
                    }

                    {
                        this.state.isMenuOpened &&
                        <DropMenu
                            clickHandler={() => this.toggleMenu(!this.state.isMenuOpened)}
                            container={this.row}
                            optionsMenu={this.optionsMenu}
                        />
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


    setOptionsMenu(options = null) {
        if (options) return this.optionsMenu = options;
        this.optionsMenu = [
            ControlMenuMessageHelper.toggleReplyMessage(this.props.conversation, this.props.messageObject),
            ControlMenuMessageHelper.toggleResendMessage(this.props.conversation, this.props.messageObject),
            ControlMenuMessageHelper.toggleSelectSeveralMessage(this.props.conversation, this.props.messageObject),
            ControlMenuMessageHelper.toggleRemoveMessage(this.props.conversation, this.props.messageObject),
        ];
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
                    // <div className="file">
                    //     <img src={Images.file_icon} alt="file-icon" />
                    //     <div className="file-info">
                    //         <a href={message.blobURL} download={message.fileName} className="download-icon">
                    //             <img src={Images.download_icon} alt="" />
                    //         </a>
                    //         <span>{FileHelper.humanFileSize(message.size, true)}</span>
                    //         <span>{message.fileName.split('.')[0]}</span>
                    //     </div>
                    // </div>
                    <FileMessage id={id} message={message} />
                );
            case "4":
                return (
                    <ReplyMessage contacts={contacts} message={message} senderId={message.toWhoReply} />
                );
            default:
                return <div></div>;
        }
    }

    toggleMenu(status) {
        this.setState({ isMenuOpened: status });
    }
}

const mapStateToProps = ({ messagesOptions, conversation }) => {
    return {
        multiSelect: messagesOptions.multiSelect,
        messageSelected: messagesOptions.messageSelected,
        conversation: conversation
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