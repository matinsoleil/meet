import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import GeneralDataUser from '../components/chat/GeneralDataUser'
import { connect } from 'react-redux'
// import ActionsContactConversation from '../components/chat/ActionsContactConversation'
import ListGeneralContacts from '../components/chat/ListGeneralContacts'
//import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer';
// import AreaSendMessage from '../components/chat/AreaSendMessage'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import fetchContact from '../redux/actions/contact/fetchContact'
import fetchConversation from '../redux/actions/conversation/fetchConversation'
import fetchUser from '../redux/actions/users/fetchUser'
import { getContacts } from '../redux/selectors/contacts'
import { getContact } from '../redux/selectors/contact'
import { getUser } from '../redux/selectors/user'
import { getConversation } from '../redux/selectors/conversation'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import { getSearchContacts } from '../redux/selectors/searchContacts';


import GeneralContactDataCreateGroup from '../components/chat/GeneralContactDataCreateGroup'



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
    renderBody = (contacts, user, contact, conversation, searchContacts) => {
        const listContact = (searchContacts.length === 0 ? contacts : searchContacts);
        return (
            <div className="main-chat">
                <div className="contacts-section-container">
                    <GeneralDataUser
                        name={user.name}
                        status={user.status}
                        imgUser={user.imgUser}
                        contacts={contacts} />
                    <div>
                        <h2 className="title-chat">Chats</h2>
                        <div class="dropdown">
                            <button className="dropbtn">Nuevo</button>
                            <div class="dropdown-content">
                                <a href="#">Nuevo chat</a>
                                <a href="#">Nuevo chat grupal</a>
                            </div>
                        </div>

                        <div>
                            <GeneralContactDataCreateGroup>
                                
                            </GeneralContactDataCreateGroup>
                        </div>
                    </div>
                    <ListGeneralContacts contacts={listContact} />
                </div>
                <MessageSectionContainer activeChat={true} chatName={this.props.contact.name} subTitle='Have a nice day' chat={conversation} />
            </div>
        );
    }
    render() {
        return (
            <AppFrame
                header=''
                body={this.renderBody(this.props.contacts, this.props.user, this.props.contact, this.props.conversation, this.props.searchContacts)}
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
    conversation: []
}
const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        user: getUser(state),
        contact: getContact(state),
        conversation: getConversation(state),
        searchContacts: getSearchContacts(state)
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