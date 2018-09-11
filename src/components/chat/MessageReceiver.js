import React from 'react';

const MessageReceiver = ({ message }) => {
    return (
        <div className="main-chat-receiver">
            <p class="alignright">{message}</p>
        </div>
    )
}

export default MessageReceiver;