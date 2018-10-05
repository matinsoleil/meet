import React, { Component } from 'react';
import MapPosition from './../../../../lib/helper/mapPosition';
export default class Message extends Component {
    render() {
        let { message, hour, type, tail, tailType, user_icon,id} = this.props;
        return (
            <div className="message-row">
                {(type === "message-out") && <img className="imgIcoUser chat-icon" src={user_icon} alt="" />}
                <div className={`message-bubble ${type}`}>
                    <div className="message-wrapper">
                        <span className={`tail ${tailType}`} style={{ backgroundImage: `url(${tail})` }}></span>
                        <div className="message">{
                            !(message instanceof Object) ? message : this.MessageContent(message,id)
                        }</div>
                        <span className="time">{hour}</span>
                    </div>
                </div>
            </div>
        );
    }

    MessageContent = (message,id ) => {
        switch (message.type) {
            case "0":
                return (
                    <img id={`map${id}`} className="map" src={MapPosition.getMapURL(message.lat,message.lon,message.zoom)} alt="" />
                );
            case "1":
                return(
                    <video controls>
                        <source src={message.src}/>
                    </video>
                );
            case "2":
                return(
                    <audio controls>
                        <source src={message.src}/>
                    </audio>
                );
            default:
                return <div></div>;
        }
    }
}