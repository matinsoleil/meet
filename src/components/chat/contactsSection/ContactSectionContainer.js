import GeneralDataUser from '../../../components/chat/contactsSection/GeneralDataUser'
// import GeneralContactDataCreateGroup from '../../../components/chat/GeneralContactDataCreateGroup'
import ListGeneralContacts from '../../../components/chat/contactsSection/ListGeneralContacts'
import React, { Component } from 'react';
import './ContactSectionContainer.scss'
class ContactSectionContainer extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            showGroup: this.props.showGroup
        }
    }

    showSectionGroupClick() {
        console.log("Mostrar ");
        // this.setState({ showGroup: true });
    }
    render() {
        return (
            <div className="contacts-section-container">
                <GeneralDataUser user={this.props.user} contacts={this.props.contacts} />
                <h2 className="title-chat">Chats</h2>
                <div className="dropdown">
                    <button className="dropbtn">Nuevo</button>
                    <div className="dropdown-content">
                        <a>Nuevo chat</a>
                        <a onClick={this.showSectionGroupClick} >Nuevo chat grupal</a>
                    </div>
                </div>
                {/* <GeneralContactDataCreateGroup /> */}
                <ListGeneralContacts contacts={this.props.listContact} />
            </div>
        );
    }
}

ContactSectionContainer.defaultProps = {
    showGroup: false
}

export default ContactSectionContainer;