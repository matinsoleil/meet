import React, { Component } from 'react';
import './ChatGeneralConversationContact.scss';
import { connect } from 'react-redux';
import Message from './Message';
// import MessagesHelper from '../../../../lib/helper/messagesHelper';
import { Images } from "../../../../redux/states/images";

class ChatGeneralConversationContact extends Component {
    render() {
        return (
            <div id='#main-chat-feed' style={{ backgroundImage: `url(${this.props.background})` }} className="main-chat-history-conversation-contact">
                <div className="initial"></div>
                {
                    (this.props.messages) ?
                        this.props.messages.map(c => {
                            const TypeMessageControl = c.sender.toString() === this.props.user.idUser.toString() ? 'message-in' : 'message-out';
                            const tailType = c.sender.toString() === this.props.user.idUser.toString() ? 'tail-out' : 'tail-in';
                            const tail = (c.sender.toString() === this.props.user.idUser.toString()) ? this.props.out_tail : this.props.in_tail;
                            return <Message
                                key={c.id}
                                messageObject={c}
                                tail={tail}
                                type={TypeMessageControl}
                                tailType={tailType}
                                user_icon={this.props.conversation.image || Images.avatar}
                                contacts={[]}
                                // contacts={props.contacts}
                                conversationId={this.props.messages.conversationID}
                            />
                        })
                        :
                        null
                }
            </div>
        )
    }
}

const mapStateToProps = ({ customizing, conversation, messages, user }) => {
    return {
        conversation: conversation,
        messages: messages,
        user: user,
        background: customizing.Images.chat_background,
        in_tail: customizing.Images.in_tail,
        out_tail: customizing.Images.out_tail,
    }
}

export default connect(mapStateToProps, null)(ChatGeneralConversationContact)