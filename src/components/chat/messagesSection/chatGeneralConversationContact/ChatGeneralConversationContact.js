import React, { Component } from 'react';
import './ChatGeneralConversationContact.scss';
import { connect } from 'react-redux';
import Message from './Message';
import MessagesHelper from '../../../../lib/helper/messagesHelper';

class ChatGeneralConversationContact extends Component {
    render() {
        let listMessagesChat = MessagesHelper.getConversation(this.props.conversation, this.props.contact.conversations)

        return (
            <div id='#main-chat-feed' style={{ backgroundImage: `url(${this.props.background})` }} className="main-chat-history-conversation-contact">
                <div className="initial"></div>
                {
                    (listMessagesChat) ?
                        <ListMessagesChatArea listMessagesChat={listMessagesChat} idUser={this.props.user.id} outTail={this.props.out_tail} outInTail={this.props.in_tail} contacts={this.props.contacts} imgContact={this.props.contact.imgContact} />
                        :
                        null
                }
            </div>
        )
    }
}

const ListMessagesChatArea = props => {
    
    return props.listMessagesChat.conversation.map(c => {
        const TypeMessageControl = c.sender === props.idUser ? 'message-in' : 'message-out';
        const tailType = c.sender === props.idUser ? 'tail-out' : 'tail-in';
        const tail = (c.sender === props.idUser) ? props.outTail : props.outInTail;
        return <Message
            key={c.id}
            messageObject={c}
            tail={tail}
            type={TypeMessageControl}
            tailType={tailType}
            user_icon={props.imgContact}
            contacts={props.contacts}
            conversationId={props.listMessagesChat.id}
        />
    })
}



const mapStateToProps = state => {
    return {
        background: state.customizing.Images.chat_background,
        in_tail: state.customizing.Images.in_tail,
        out_tail: state.customizing.Images.out_tail,
        conversation: state.conversation,
        user: state.users,
    }
}

export default connect(mapStateToProps, null)(ChatGeneralConversationContact)