import React from 'react';

const ActionsContactConversation = ({ imgContact, status, nameContact }) => {
    return (
        <div className="main-chat-user-connect-conversation-user">
            <div className="icon-user">
                <img className="imgIcoUser " src={imgContact} alt="test" />
            </div>
            <div class="circleActive circleBase right">
            </div>
            <div>
                <h1 className="descriptionUser">{nameContact}</h1>
                <h1 className="descriptionUser">{status}</h1>
            </div>
        </div>
    );
}

export default ActionsContactConversation;