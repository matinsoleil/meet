import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import { fetchConversation } from '../redux/actions/conversation/fetchConversation'
import { fetchUser } from '../redux/actions/users/fetchUser'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import hideAlertGeneral from '../redux/actions/alertGeneral/hideAlertGeneral'
import RightSection from '../components/chat/rightSection/RightSection'
import ModalBox from '../components/modals/ModalBox'
import LengthSection from '../components/chat/lengthSection/LengthSection';

class ChatContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts()
        // this.props.fetchConversation()
        this.props.fetchUser()
        //this.props.fetchGroups()
        // this.props.initApi();
        // this.props.getToken({});
        // this.props.login();
        //this.props.logout();
    }

    renderBody = (listContact, user, conversation, groups) => {
        if (this.props.alertGeneral.show === true) {
            setTimeout(function () {
                if (this.props.alertGeneral.show === true) {
                    this.props.hideAlertGeneral()
                }
            }.bind(this), 3000)
        }
        return (
            <div className="main-chat">
                <LengthSection />
                <MessageSectionContainer contacts={listContact} chat={conversation} contact={this.props.contact} server={this.props.server} />
                {this.props.rightSection.show ? <RightSection showSection={this.props.rightSection.showSectionSpecific} /> : null}
                {this.props.alertGeneral.show === true ?
                    <div className="message-popup">
                        <p className="text-message-popup"> {this.props.alertGeneral.msj} </p>
                    </div>
                    : null
                }
                <ModalBox />
            </div>
        );
    }

    render() {
        let listContact = this.props.contacts.filter(function (contact) {
            return contact.conversations !== null;
        })
        return (
            <AppFrame
                header=''
                body={this.renderBody(listContact, this.props.user, this.props.conversation, this.props.groups, this.props.contactSection, this.props.server)}
                footer=''>
            </AppFrame>
        )
    }
}

ChatContainer.defaultProps = {
    contacts: [],
    searchContacts: [],
    user: [],
    contact: null,
    conversation: [],
    groups: [],
    alertGeneral: [],
    rightSection: []
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
        fetchConversation: () => {
            dispatch(fetchConversation())
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)