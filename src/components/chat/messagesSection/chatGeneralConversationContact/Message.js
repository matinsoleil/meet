import React, { Component } from 'react';
import { connect } from 'react-redux';
import DotsMenu from './dotsMenu';
import FileHelper from './../../../../lib/helper/fileHelper';
import MapPosition from './../../../../lib/helper/mapPosition';
class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuState: false
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
        this.setState({
            menuState: !this.state.menuState
        });
    }

    render() {
        let { message, hour, type, tail, tailType, user_icon, id } = this.props;
        return (
            <div className="message-row">
                {(type === "message-out") && <img className="img-icon-user chat-icon" src={user_icon} alt="" />}
                <div ref={div => { this.bubble = div }} className={`message-bubble ${type}`}>
                    <div className={`message-wrapper ${(message.type) ? 'no-text' : ''}`}>
                        <span className={`tail ${tailType}`} style={{ backgroundImage: `url(${tail})` }}></span>
                        <div className="message">{
                            !(message instanceof Object) ? message : this.MessageContent(message, id)
                        }</div>
                        <div className="time-content">
                            <span className="time">{hour}</span>
                        </div>
                    </div>
                    <DotsMenu display={this.state.menuState} />
                </div>
            </div>
        );
    }

    MessageContent = (message, id) => {
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
                    <audio controls>
                        <source src={message.src} />
                    </audio>
                );
            case "3":
                return (
                    <div className="file">
                        <img src={this.props.file_icon} alt="file-icon" />
                        <div className="file-info">
                            <span>{FileHelper.humanFileSize(message.size, true)}</span>
                            <span>{message.fileName}</span>
                        </div>
                    </div>
                );
            default:
                return <div></div>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        file_icon: state.customizing.Images.file_icon
    }
}

export default connect(mapStateToProps, null)(Message);