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
      name: "Viejo Lesbiano",
      label: "label contact 69",
      lastMessageDate: 1543447426077,//"dayLastMessage": "8 min",
      lastMessage: "Hello, how are you?",//"lastMessage": "Last Message",
      unreadMessages: { status: true, messages: null },//"countMessage": "1",
      mutted: false,//"silence": "0",
      file: false,//"file": "0",
      pinned: true,//"pinner": "0",
      members: [],//"contactsIds": null,
      //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
      type: "basic",
      stored: true,
    };
   
    const messagesTest = [];
    /*
    const messagesTest = [
      {
        "id": "1",
        "conversationId": 3,
        "message": "Hi Jack. What are you doing?",
        "hour": "10:01",
        "status": "1",
        "sender": "50",
        "create": "1541269226"
      },
      {
        "id": "2",
        "conversationId": 3,
        "message": "Hi Mary. I'm filling out a job application.",
        "hour": "10:02",
        "status": "1",
        "sender": "2",
        "create": "1541355626"
      },
      {
        "id": "3",
        "conversationId": 3,
        "message": "Are you finished with school already?",
        "hour": "10:03",
        "status": "1",
        "sender": "50",
        "create": "1541442026"
      },
      {
        "id": "4",
        "conversationId": 3,
        "message": "No. I have one more semester, but it would be great to have a job lined up.",
        "hour": "10:04",
        "status": "1",
        "sender": "2",
        "create": "1541528426"
      }
    ];
    */
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
            <FooterMessagesSection />
          </React.Fragment>
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