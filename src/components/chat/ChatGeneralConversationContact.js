import React from 'react';
import MessageReceiver from './MessageReceiver';
import MessageTransmitter from './MessageTransmitter';

const ChatGeneralConversationContact = ({ chat }) => {
    return (
        <div className="main-chat-history-conversation-contact">
            {chat.map(c => {
                const TypeMessageControl = c.userSend === "1" ? MessageReceiver : MessageTransmitter;
                return <TypeMessageControl key={c.id}
                    message={c.message}
                    hour={c.hour} />
            })}
        </div>
    );
}

export default ChatGeneralConversationContact;