import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import { connect } from 'react-redux'
import MessageSectionContainer from './../components/chat/messagesSection/messagesSectionContainer'
import fetchContacts from '../redux/actions/contacts/fetchContacts'
import fetchContact from '../redux/actions/contact/fetchContact'
import { fetchConversation } from '../redux/actions/conversation/fetchConversation'
import fetchRightSectionContainer from '../redux/actions/rightSectionContainer/fetchRightSectionContainer'
import fetchUser from '../redux/actions/users/fetchUser'
import fetchGroups from '../redux/actions/groups/fetchGroups'
import { getContacts } from '../redux/selectors/contacts'
import { getContact } from '../redux/selectors/contact'
import { getUser } from '../redux/selectors/user'
import { getConversation } from '../redux/selectors/conversation'
import { initApi, getToken, login, logout } from '../redux/actions/messageCenter/messageCenter'
import { getSearchContacts } from '../redux/selectors/searchContacts'
import { getGroups } from '../redux/selectors/groups'
import { getAlertGeneral } from '../redux/selectors/alertGeneral'
import RightSectionContainer from '../components/chat/chatsSection/RightSectionContainer'
import GroupSectionContainer from '../components/chat/groupSection/GroupSectionContainer'
import hideAlertGeneral from '../redux/actions/alertGeneral/hideAlertGeneral'
import { getRightSectionContainer } from '../redux/selectors/rightSectionContainer'

class ChatContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts()
        this.props.fetchUser()
        this.props.fetchContact()
        //this.props.fetchConversation()
        this.props.fetchGroups()
        this.props.fetchRightSectionContainer()
        // this.props.initApi();
        // this.props.getToken({});
        // this.props.login();
        //this.props.logout();
    }

    renderBody = (contacts, user, conversation, groups, rightSectionContainer) => {
        if (this.props.alertGeneral.show === true) {
            setTimeout(function () {
                this.props.hideAlertGeneral()
            }.bind(this), 3000)
        }
        return (
            <div className="main-chat">
                <RightSectionContainer user={user} contacts={contacts} rightSectionContainer={rightSectionContainer} />
                <MessageSectionContainer contacts={contacts} activeChat={this.props.contact} chatName={this.props.contact.name} subTitle='Have a nice day' chat={conversation} />
                {groups.view ? <GroupSectionContainer contacts={contacts} groups={groups} /> : null}

                {this.props.alertGeneral.show === true ?
                    <div className="message-popup">
                        <p className="text-message-popup"> <span className="msg"> {this.props.alertGeneral.msj} </span> </p>
                    </div>
                    : null
                }
            </div>
        );
    }

    render() {
        return (
            <AppFrame
                header=''
                body={this.renderBody(this.props.contacts, this.props.user, this.props.conversation, this.props.groups, this.props.rightSectionContainer)}
                footer=''>
            </AppFrame>
        )
    }
}

ChatContainer.defaultProps = {
    contacts: [],
    searchContacts: [],
    user: [],
    contact: [],
    conversation: [],
    groups: [],
    alertGeneral: []
}

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        user: getUser(state),
        contact: getContact(state),
        conversation: getConversation(state),
        searchContacts: getSearchContacts(state),
        groups: getGroups(state),
        alertGeneral: getAlertGeneral(state),
        rightSectionContainer: getRightSectionContainer(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        },
        fetchContact: () => {
            dispatch(fetchContact(1))
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
        fetchRightSectionContainer: (listaContact) => {
            dispatch(fetchRightSectionContainer(listaContact))
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