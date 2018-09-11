import React from 'react';

const MessageReceiver = ({ message, hour }) => {
    return (
        <div className="main-chat-receiver">
            <p className="alignright">{message} <br /> {hour}</p>
        </div>
    )
}

export default MessageReceiver;