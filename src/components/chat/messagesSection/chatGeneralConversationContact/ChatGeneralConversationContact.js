import React from 'react';
import './ChatGeneralConversationContact.scss';

const ChatGeneralConversationContact = ({ chat }) => {
    return (
        <div className="main-chat-history-conversation-contact">
            <div className="initial"></div>    
        {chat.map(c => {
                const TypeMessageControl = c.userSend === "1" ? MessageReceiver : MessageTransmitter;
                return <TypeMessageControl key={c.id}
                    message={c.message}
                    hour={c.hour} />
            })}
        </div>
    );

}

const MessageReceiver = ({ message, hour }) => {
    return (
        <div className="message-row">
            <div className="message-bubble message-in">
                <img src="" alt="" />
                <div className="message-wrapper">
                    <div className="message">{message}</div>
                    <span className="time">{hour}</span>
                </div>
            </div>
        </div>
    )
}

const MessageTransmitter = ({ message, hour }) => {
    return (
        <div className="message-row">
            <div className="message-bubble message-out">
                <img src="" alt="" />
                <div className="message-wrapper">
                    <div className="message">{message}</div>
                    <span className="time">{hour}</span>
                </div>
            </div>
        </div>
    )
}

export default ChatGeneralConversationContact;