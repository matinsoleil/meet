import React, { Component } from 'react';
import './ChatGeneralConversationContact.scss';
import { connect } from 'react-redux';
import Message from './Message';
import MessagesHelper from '../../../../lib/helper/messagesHelper';

class ChatGeneralConversationContact extends Component {
    render() {        
        let conversation = MessagesHelper.getConversation(this.props.conversation, this.props.contact.conversations)
        return (
            <div id='#main-chat-feed' style={{ backgroundImage: `url(${this.props.background})` }} className="main-chat-history-conversation-contact">
                <div className="initial"></div>
                {
                    (conversation) ?
                        conversation.conversation.map(c => {
                            const TypeMessageControl = c.sender === this.props.user.id ? 'message-in' : 'message-out';
                            const tailType = c.sender === this.props.user.id ? 'tail-out' : 'tail-in';
                            const tail = (c.sender === this.props.user.id) ? this.props.out_tail : this.props.in_tail;
                            return <Message
                                key={c.id}
                                messageObject={c}
                                tail={tail}
                                type={TypeMessageControl}
                                tailType={tailType}
                                user_icon={this.props.contact.imgContact}
                                contacts={this.props.contacts}
                                conversationId = {conversation.id}
                            />
                        })
                        :
                        null
                }
            </div>
        )
    }
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