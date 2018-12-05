import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
// import { fetchConversation } from '../redux/actions/conversation/fetchConversation'
import { fetchUser } from '../redux/actions/users/fetchUser'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import hideAlertGeneral from '../redux/actions/alertGeneral/hideAlertGeneral'
import SupportSection from '../components/chat/supportSection/supportSection'
import ControlSectionContainer from '../components/chat/chatsSection/ControlSectionContainer';
import {toggleSupportSection,Type} from "../redux/actions/views/supportSection";
class ChatContainer extends Component {

    componentWillMount() {
        this.props.fetchContacts();
        // this.props.fetchUser();
    }

    render() {
        return (
            <div className="app-frame">
                <div className="main-chat">
                    <ControlSectionContainer/>
                    <MessageSectionContainer/>
                    <SupportSection />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ contacts, users, contact, conversation, searchContacts, groupsSection, alertGeneral, rightSection, contactSection }) => {
    return {
        contacts: contacts,
        user: users,
        contact: contact,
        conversation: conversation,
        searchContacts: searchContacts,
        groupsSection: groupsSection,
        alertGeneral: alertGeneral,
        rightSection: rightSection,
        contactSection: contactSection,
        server: { serverName: '192.168.21.150', port: '8888' },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        },
        fetchUser: () => {
            dispatch(fetchUser("U1"))
        },
        initApi: params => {
            dispatch(initApi(params))
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
        },
        toggleSupportSection: (title,type) => {
            dispatch(toggleSupportSection(title,type));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)