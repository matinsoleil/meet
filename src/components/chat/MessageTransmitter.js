import React from 'react';

const MessageTransmitter = ({ message, hour }) => {
    return (
        <div className="main-chat-transmitter">
            <p style={{
                float:"right"
            }}>{message} <br /> {hour}</p>
        </div>
    )
}

export default MessageTransmitter;