import React from 'react';
import MessageReceiver from './MessageReceiver';
import MessageTransmitter from './MessageTransmitter';

const ChatGeneralConversationContact = ({ chat }) => {
    return (
        <div className="main-chat-history-conversation-contact">
            {chat.map(c => {
                if (c.userSend === "1") {
                    return (<MessageReceiver key={c.id} 
                                             message={c.message} 
                                             hour={c.hour}/>)
                } else {
                    return (<MessageTransmitter key={c.id}
                                                message={c.message} 
                                                hour={c.hour} />)
                }
            })}
        </div>
    );
}

export default ChatGeneralConversationContact;