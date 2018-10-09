import React from 'react';

const ActionsContactConversation = ({ imgContact, status, nameContact }) => {
    return (
        <div className="main-chat-user-connect-conversation-user">
            <div className="icon-user">
                <img className="img-icon-user " src={imgContact} alt="test" />
            </div>
            <div className="circleActive circleBase right">
            </div>
            <div>
                <h5>
                    {nameContact}
                    <p>{status}</p>
                </h5>
            </div>
        </div>
    );
}

export default ActionsContactConversation;