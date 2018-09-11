import React from 'react';

const MessageTransmitter = ({ message, hour }) => {
    return (
        <div className="main-chat-transmitter">
            <p class="alignleft">{message} <br /> {hour}</p>
        </div>
    )
}

export default MessageTransmitter;