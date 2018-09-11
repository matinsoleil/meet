import React from 'react';

const ActionsContactConversation = ({ imgContact, status, nameContact }) => {
    return (
        <div className="main-chat-user-connect-conversation-user">
            <div className="icon-user">
                <img className="imgIcoUser" src={imgContact} alt="test" />
            </div>
            <div>
                {nameContact}
            </div>
            <div>
                {status}
            </div>
            <div className="boton-action-user">
            </div>
        </div>
    );
}

export default ActionsContactConversation;