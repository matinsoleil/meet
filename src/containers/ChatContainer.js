import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import { fetchConversation } from '../redux/actions/conversation/fetchConversation'
import { fetchUser } from '../redux/actions/users/fetchUser'
import { fetchGroups } from '../redux/actions/groups/fetchGroups'
import { getContacts } from '../redux/selectors/contacts'
import { getContact } from '../redux/selectors/contact'
import { getUser } from '../redux/selectors/user'
import { getConversation } from '../redux/selectors/conversation'
import { getContactSection } from '../redux/selectors/contactSection'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import { getSearchContacts } from '../redux/selectors/searchContacts'
import { getGroupsSection } from '../redux/selectors/groupsSection'
import { getAlertGeneral } from '../redux/selectors/alertGeneral'
import ContactSectionContainer from '../components/chat/chatsSection/ContactSectionContainer'
import hideAlertGeneral from '../redux/actions/alertGeneral/hideAlertGeneral'
import { getRightSection } from '../redux/selectors/rightSection'
import RightSection from '../components/chat/rightSection/RightSection'
import ModalBox from '../components/modals/ModalBox'
import Profile from '../components/chat/profileSection/Profile';
import MyCodeQR from '../components/chat/profileSection/MyCodeQR';
import EditProfile from '../components/chat/profileSection/EditProfile';

class ChatContainer extends Component {
    componentDidMount() {
        // this.props.fetchContacts()
        // this.props.fetchConversation()
        this.props.fetchUser()
        this.props.fetchGroups()
        
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
              <ContactSectionContainer />
                {/* <Profile /> */}
                {/* <MyCodeQR /> */}
                {/* <EditProfile /> */}
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
        fetchConversation: () => {
            dispatch(fetchConversation())
        },
        fetchGroups: () => {
            dispatch(fetchGroups())
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