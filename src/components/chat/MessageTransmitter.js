import React from 'react';

const MessageTransmitter = ({ message }) => {
    return (
        <div className="main-chat-transmitter">
            <p class="alignleft">{message}</p>
        </div>
    )
}

export default MessageTransmitter;