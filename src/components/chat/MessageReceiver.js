import React from 'react';

const MessageReceiver = ({ message, hour }) => {
    return (
        <div className="main-chat-receiver">
            <img src="" alt="" />
            <div>
                <p>{message}</p>
                <span>{hour}</span>
            </div>
        </div>
    )
}

export default MessageReceiver;