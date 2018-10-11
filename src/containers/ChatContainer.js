import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer';
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import fetchContact from '../redux/actions/contact/fetchContact'
import {fetchConversation} from '../redux/actions/conversation/fetchConversation'
import fetchUser from '../redux/actions/users/fetchUser'
import fetchGroups from '../redux/actions/groups/fetchGroups'
import { getContacts } from '../redux/selectors/contacts'
import { getContact } from '../redux/selectors/contact'
import { getUser } from '../redux/selectors/user'
import { getConversation } from '../redux/selectors/conversation'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import { getSearchContacts } from '../redux/selectors/searchContacts';
import { getGroups } from '../redux/selectors/groups';
import ContactSectionContainer from '../components/chat/contactsSection/ContactSectionContainer'
import GroupSectionContainer from '../components/chat/groupSection/GroupSectionContainer'
class ChatContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts();
        this.props.fetchUser();
        this.props.fetchContact();
        this.props.fetchConversation();
        this.props.fetchGroups();
        // this.props.initApi();
        // this.props.getToken({});
        // this.props.login();
        //this.props.logout();
    }
    // componentDidCatch() {
    //     debugger
    // }
    renderBody = (contacts, user, conversation, searchContacts, groups) => {
        const listContact = (searchContacts.length === 0 ? contacts : searchContacts);
        return (
            <div className="main-chat">
                <ContactSectionContainer user={user} contacts={contacts} listContact={listContact} />
                <MessageSectionContainer activeChat={true} chatName={this.props.contact.name} subTitle='Have a nice day' chat={conversation} />
                {/* {groups.view ? <GroupSectionContainer user={user} contacts={contacts} listContact={listContact} /> : null} */}
                {groups.view ? <GroupSectionContainer user={user} listContact={listContact}  groups={groups}   /> : null}
            </div>
        );
    }
    render() {
        return (
            <AppFrame
                header=''
                body={this.renderBody(this.props.contacts, this.props.user, this.props.conversation, this.props.searchContacts, this.props.groups)}
                footer=''>
            </AppFrame>
        );
    }
}
ChatContainer.defaultProps = {
    contacts: [],
    searchContacts: [],
    user: [],
    contact: [],
    conversation: [],
    contactsAddGroup: [],
    groups: []
}
const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        user: getUser(state),
        contact: getContact(state),
        conversation: getConversation(state),
        searchContacts: getSearchContacts(state),
        groups: getGroups(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts());
        },
        fetchContact: () => {
            dispatch(fetchContact(1));
        },
        fetchConversation: () => {
            dispatch(fetchConversation());
        },
        fetchGroups: () => {
            dispatch(fetchGroups());
        },        
        fetchUser: () => {
            dispatch(fetchUser(1));
        },
        initApi: params => {
            dispatch(initApi(params));
        },
        getToken: params => {
            dispatch(getToken(params));
        },
        login: params => {
            dispatch(login());
        },
        logout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);