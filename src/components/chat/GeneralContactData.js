import React from 'react';

const GeneralContactData = ({nameContact, dayLastMessage, lastMessage, imgContact, status}) => {
        return (
            <div className="contact-chat">
                <div className="icon-user">
                <img className="imgIcoUser" src={imgContact} alt="test" />
                </div>
                <div >
                    {nameContact}
                </div>
                <div >
                    {status}
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