import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import GeneralDataUser from '../components/chat/GeneralDataUser'
import { connect } from 'react-redux'
import ActionsContactConversation from '../components/chat/ActionsContactConversation'
import ListGeneralContacts from '../components/chat/ListGeneralContacts'
import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact'
import AreaSendMessage from '../components/chat/AreaSendMessage'
import fetchContacts from '../actions/contacts/fetchContacts'
import fetchContact from '../actions/contact/fetchContact'
import fetchConversation from '../actions/conversation/fetchConversation'
import fetchUser from '../actions/users/fetchUser'
import { getContacts } from './../selectors/contacts'
import { getContact } from './../selectors/contact'
import { getUser } from './../selectors/user'
import { getConversation } from '../selectors/conversation';

const conversationOfContact = [{
    "id": "1",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "hour": "10:01",
    "status": "1"
}, {
    "id": "2",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "hour": "10:02",
    "status": "1"
}, {
    "id": "3",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "hour": "10:03",
    "status": "1"
}, {
    "id": "4",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "hour": "10:04",
    "status": "1"
}, {
    "id": "5",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "hour": "10:05",
    "status": "1"
}, {
    "id": "6",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "hour": "10:06",
    "status": "1"
}, {
    "id": "7",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "hour": "10:07",
    "status": "1"
}, {
    "id": "8",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "hour": "10:08",
    "status": "1"
}, {
    "id": "9",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "hour": "10:09",
    "status": "1"
}, {
    "id": "10",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "hour": "10:10",
    "status": "1"
}, {
    "id": "11",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "hour": "10:11",
    "status": "1"
},
{
    "id": "12",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "hour": "10:12",
    "status": "1"
}]

class ChatContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts();
        this.props.fetchUser();
        this.props.fetchContact();
    }
    renderBody = (contacts, user, contact) => {
        return (
            <div >
                <div className="main-chat-header">
                    {user.map(obj => <GeneralDataUser key={obj.id}
                        name={obj.name}
                        status={obj.status}
                        imgUser={obj.imgUser} />)}
                    {contact.map(obj => <ActionsContactConversation key={obj.id}
                        nameContact={obj.name}
                        status={obj.status}
                        imgContact={obj.imgContact} />)}
                </div>
                <div className="main-chat-body">
                    <ListGeneralContacts contacts={contacts} />
                    <div className="main-chat-general-conversation-contact">
                        <ChatGeneralConversationContact chat={conversationOfContact} />
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
                    body={this.renderBody(this.props.contacts, this.props.user, this.props.contact)}
                    footer=''>
                </AppFrame>
            </div>
        );
    }
}
ChatContainer.defaultProps = {
    contacts: [],
    user: [],
    contact: []
}
const mapStateToProps = (state, props) => {
    return {
        contacts: getContacts(state, props),
        user: getUser(state, props),
        contact: getContact(state, props),
        conversation: getConversation(state, props)
    }
}
const mapDispatchProps = ({
    fetchContacts,
    fetchUser,
    fetchContact,
    fetchConversation
});
export default connect(mapStateToProps, mapDispatchProps)(ChatContainer);