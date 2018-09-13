import React from 'react';
import MessageReceiver from './MessageReceiver';
// import MessageTransmitter from './MessageTransmitter';

const ChatGeneralConversationContact = ({ chat }) => {
    console.log(chat);
    
    return (
        <div className="main-chat-history-conversation-contact">
            {chat.map(c => {
                return (<MessageReceiver key={c.id}
                    message={c.message}
                    hour={c.hour} />)
            })}
        </div>
    );
}

export default ChatGeneralConversationContact;