import GeneralDataUser from '../../../components/chat/contactsSection/GeneralDataUser'
import ListGeneralContacts from '../../../components/chat/contactsSection/ListGeneralContacts'
import showSectionGroups from '../../../redux/actions/groups/showSectionGroups'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './ContactSectionContainer.scss'
class ContactSectionContainer extends Component {
    constructor( props ) {
        super( props );
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
                        <a onClick={this.props.showSectionGroups} >Nuevo chat grupal</a>
                    </div>
                </div>
                {/* <GeneralContactDataCreateGroup /> */}
                <ListGeneralContacts contacts={this.props.listContact} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showSectionGroups: () => {
            dispatch(showSectionGroups());
        },
    }
}
export default connect(null, mapDispatchToProps)(ContactSectionContainer);