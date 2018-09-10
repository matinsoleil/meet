import React from 'react';

const GeneralContactData = ({nameContact, dayLastMessage, lastMessage, imgContact}) => {
        return (
            <div className="contact-chat">
                <div className="icon-user">
                <img src={imgContact} height="42" width="42" />
                </div>
                <div >
                    {nameContact}
                </div>
                <div >
                    {dayLastMessage}
                </div>
                <div >
                    {lastMessage}
                </div>
            </div>
        );
}

export default GeneralContactData;