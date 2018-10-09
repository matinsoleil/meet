import GeneralDataUser from '../../../components/chat/GeneralDataUser'
import GeneralContactDataCreateGroup from '../../../components/chat/GeneralContactDataCreateGroup'
import ListGeneralContacts from '../../../components/chat/ListGeneralContacts'
import React, { Component } from 'react';

class ContactSectionContainer extends Component {
    render() {
        return (
            <div className="contacts-section-container">
                <GeneralDataUser user={this.props.user} contacts={this.props.contacts} />
                <h2 className="title-chat">Chats</h2>
                <div class="dropdown">
                    <button className="dropbtn">Nuevo</button>
                    <div class="dropdown-content">
                        <a href="#">Nuevo chat</a>
                        <a href="#">Nuevo chat grupal</a>
                    </div>
                </div>
                <GeneralContactDataCreateGroup />
                <ListGeneralContacts contacts={this.props.contacts} />
            </div>
        );
    }
}

export default ContactSectionContainer;