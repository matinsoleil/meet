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
import { getConversation } from '../redux/selectors/conversation';
class ChatContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts();
        this.props.fetchUser();
        this.props.fetchContact();
        this.props.fetchConversation();
    }
    renderBody = (contacts, user, contact, conversation) => {
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
                    body={this.renderBody(this.props.contacts, this.props.user, this.props.contact, this.props.conversation )}
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
    conversation:[]
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