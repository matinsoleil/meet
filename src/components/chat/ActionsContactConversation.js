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
                {nameContact}
                {status}
            </div>
        </div>
    );
}

export default ActionsContactConversation;