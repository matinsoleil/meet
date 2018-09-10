import React from 'react';
import GeneralContactData from './GeneralContactData';

const ListGeneralContacts = ({ contacts }) => {
    return (
        <div className="main-chat-general-list-contact">
            {contacts.map(c =>
                <GeneralContactData
                    nameContact={c.name}
                    dayLastMessage={c.dayLastMessage}
                    lastMessage={c.lastMessage}
                    imgContact={c.imgContact}>
                </GeneralContactData>
            )}
        </div>
    );
}

export default ListGeneralContacts;