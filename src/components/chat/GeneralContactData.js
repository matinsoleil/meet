import React from 'react';

const GeneralContactData = ({nameContact, dayLastMessage, lastMessage}) => {
        return (
            <div className="contact-chat">
                <div className="icon-user">
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