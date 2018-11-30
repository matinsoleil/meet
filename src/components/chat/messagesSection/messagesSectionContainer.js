import React, { Component } from 'react';
import HeaderMessagesSection from './headerMessagesSection/headerMessagesSection';
import FooterMessagesSection from './footerMessagesSection/footerMessagesSection';
import { addConversation } from '../../../redux/actions/conversation/conversation'
import { addMessages } from '../../../redux/actions/messages/messages'
import ChatGeneralConversationContact from './chatGeneralConversationContact/ChatGeneralConversationContact';
import InactiveChat from './inactiveChat/inactiveChat';
import { connect } from 'react-redux'
import './messagesSectionContainer.scss'
class MessagesSectionContainer extends Component {

  componentDidMount() {
    const conversationTest = {
      id: 1,
      idUser: 1,
      name: "stylopm ",
      label: "label grupo stylopm 99999",
      members: [{ id: 1, name: 'Jose' }, { id: 2, name: 'Juan' }],
      type: "basic",
    };

    const messagesTest = {
      conversationID: 3,
      owner: 1,
      messages: [
        {
          "id": "1",
          "message": "Hi Jack. What are you doing?",
          "hour": "10:01",
          "status": "1",
          "sender": "U1"
        },
        {
          "id": "2",
          "message": "Hi Mary. I'm filling out a job application.",
          "hour": "10:02",
          "status": "1",
          "sender": "2"
        },
        {
          "id": "3",
          "message": "Are you finished with school already?",
          "hour": "10:03",
          "status": "1",
          "sender": "U1"
        },
        {
          "id": "4",
          "message": "No. I have one more semester, but it would be great to have a job lined up.",
          "hour": "10:04",
          "status": "1",
          "sender": "2"
        }]
    }
    this.props.addConversation(conversationTest);
    this.props.addMessages(messagesTest);

  }

  render() {
    return (
      <div className='messages-section-container' >
        {this.props.conversation ? (
          <React.Fragment>
            <HeaderMessagesSection />
            <ChatGeneralConversationContact />
            {/* <FooterMessagesSection /> */}
          </React.Fragment>

          // <ActiveChat
          //     label={this.props.conversation.label}
          //     members= { this.props.conversation.members }
          //     chatName={this.props.conversation.name}
          //     chat={[]}
          //     contacts={[]}
          //     contact={this.props.conversation}
          //     server={this.props.server}
          // />

          // <ChatGeneralConversationContact contact={props.conversation} contacts={props.contacts} chat=[{props.chat}] />
          // <FooterMessagesSection serverChat={props.server} /> 


        ) : (
            <InactiveChat />
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ user, conversation }) => {
  return {
    user: user,
    conversation: conversation,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addConversation: (conversations) => {
      dispatch(addConversation(conversations))
    },
    addMessages: (messages) => {
      dispatch(addMessages(messages))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesSectionContainer)