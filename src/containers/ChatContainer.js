import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import { fetchContactSection } from '../redux/actions/contactSection/fetchContactSection'
import { fetchUser } from '../redux/actions/users/fetchUser'
import { fetchGroups } from '../redux/actions/groups/fetchGroups'
import { getContacts } from '../redux/selectors/contacts'
import { getContact } from '../redux/selectors/contact'
import { getUser } from '../redux/selectors/user'
import { getConversation } from '../redux/selectors/conversation'
import { getContactSection } from '../redux/selectors/contactSection'
import { getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import { getSearchContacts } from '../redux/selectors/searchContacts'
import { getGroupsSection } from '../redux/selectors/groupsSection'
import { getAlertGeneral } from '../redux/selectors/alertGeneral'
import ContactSectionContainer from '../components/chat/chatsSection/ContactSectionContainer'
import hideAlertGeneral from '../redux/actions/alertGeneral/hideAlertGeneral'
import { getRightSection } from '../redux/selectors/rightSection'
import RightSection from '../components/chat/rightSection/RightSection'
import ModalBox from '../components/modals/ModalBox'

import Popup from "../components/modals/Popup";

class ChatContainer extends Component {

    componentDidMount() {
        this.props.fetchUser()
        this.props.fetchGroups()
        this.props.fetchContactSection()
    }

    render() {
        let listContact = this.props.contacts.filter(function (contact) {
            return contact.conversations !== null;
        });
        //TODO: erase app-frame
        return (
            <div className="app-frame">
                <div className="main-chat">
                    <ContactSectionContainer user={this.props.user} contacts={listContact} contactSection={this.props.contactSection} server={this.props.server} />
                    <MessageSectionContainer contacts={listContact} chat={this.props.conversation} contact={this.props.contact} server={this.props.server} />
                    {this.props.rightSection.show ? <RightSection showSection={this.props.rightSection.showSectionSpecific} /> : null}
                    {this.props.alertGeneral.show === <Popup message = { this.props.alertGeneral.msg }/>}
                    <ModalBox/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        user: getUser(state),
        contact: getContact(state),
        conversation: getConversation(state),
        searchContacts: getSearchContacts(state),
        groupsSection: getGroupsSection(state),
        alertGeneral: getAlertGeneral(state),
        rightSection: getRightSection(state),
        contactSection: getContactSection(state),
        server: { serverName: '192.168.21.150', port: '8888' },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        },
        fetchGroups: () => {
            dispatch(fetchGroups())
        },
        fetchUser: () => {
            dispatch(fetchUser("U1"))
        },
        fetchContactSection: () => {
            dispatch(fetchContactSection())
        },
        getToken: params => {
            dispatch(getToken(params))
        },
        login: params => {
            dispatch(login())
        },
        logout: () => {
            dispatch(logout())
        },
        hideAlertGeneral: () => {
            dispatch(hideAlertGeneral())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)