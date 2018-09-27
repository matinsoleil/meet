import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import GeneralDataUser from '../components/chat/GeneralDataUser'
import { connect } from 'react-redux'
import ActionsContactConversation from '../components/chat/ActionsContactConversation'
import ListGeneralContacts from '../components/chat/ListGeneralContacts'
import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact'
import AreaSendMessage from '../components/chat/AreaSendMessage'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import fetchContact from '../redux/actions/contact/fetchContact'
import fetchConversation from '../redux/actions/conversation/fetchConversation'
import fetchUser from '../redux/actions/users/fetchUser'
import { getContacts } from '../redux/selectors/contacts'
import { getContact } from '../redux/selectors/contact'
import { getUser } from '../redux/selectors/user'
import { getConversation } from '../redux/selectors/conversation'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'

class ChatContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts();
        this.props.fetchUser();
        this.props.fetchContact();
        this.props.fetchConversation();
        // this.props.initApi();
        // this.props.getToken({});
        // this.props.login();
        // this.props.logout();
    }
    componentDidCatch() {
        debugger
    }
    renderBody = (contacts, user, contact, conversation) => {
        return (
            <div >
                <div className="main-chat-header">
                     <GeneralDataUser 
                        name={user.name}
                        status={user.status}
                        imgUser={user.imgUser} /> 
                    <ActionsContactConversation key={contact.id}
                        nameContact={contact.name}
                        status={contact.status}
                        imgContact={contact.imgContact} />
                </div>
                <div className="main-chat-body">
                    <ListGeneralContacts contacts={contacts} />
                    <div className="main-chat-general-conversation-contact">
                        <ChatGeneralConversationContact chat={conversation} />
                        <AreaSendMessage />
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <AppFrame
                    header=''
                    body={this.renderBody(this.props.contacts, this.props.user, this.props.contact, this.props.conversation)}
                    footer=''>
                </AppFrame>
            </div>
        );
    }
}
ChatContainer.defaultProps = {
    contacts: [],
    user: [],
    contact: [],
    conversation: []
}
const mapStateToProps = (state, props) => {
    return {
        contacts: getContacts(state, props),
        user: getUser(state, props),
        contact: getContact(state, props),
        conversation: getConversation(state, props)
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