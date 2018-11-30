import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
// import { fetchConversation } from '../redux/actions/conversation/fetchConversation'
import { fetchUser } from '../redux/actions/users/fetchUser'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import hideAlertGeneral from '../redux/actions/alertGeneral/hideAlertGeneral'
import ControlSectionContainer from '../components/chat/chatsSection/ControlSectionContainer';

class ChatContainer extends Component {

    componentWillMount() {
        // this.props.fetchContacts();
        // this.props.fetchUser();
    }

    render() {
        let listContact = this.props.contacts.filter(function (contact) {
            return contact.conversations !== null;
        });
        return (
            <div className="app-frame">
                <div className="main-chat">
                    <ControlSectionContainer/>
                    <MessageSectionContainer/>
                    {/* <MessageSectionContainer contacts={listContact} chat={this.props.conversation} contact={this.props.contact} server={this.props.server} /> */}
                    {/*this.props.rightSection.show ? <RightSection showSection={this.props.rightSection.showSectionSpecific} /> : null*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        user: state.users,
        contact: state.contact,
        conversation: state.conversation,
        searchContacts: state.searchContacts,
        groupsSection: state.groupsSection,
        alertGeneral: state.alertGeneral,
        rightSection: state.rightSection,
        contactSection: state.contactSection,
        server: { serverName: '192.168.21.150', port: '8888' },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        },
        // fetchConversation: () => {
        //     dispatch(fetchConversation())
        // },
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)