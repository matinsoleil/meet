import React, { Component } from 'react';
import './ChatGeneralConversationContact.scss';
import { connect } from 'react-redux';
import Message from './Message';
import { Images } from "../../../../redux/states/images";

class ChatGeneralConversationContact extends Component {
    render() {
        return (
            <div id='#main-chat-feed' style={{ backgroundImage: `url(${Images.chat_background})` }} className="main-chat-history-conversation-contact">
                <div className="initial"></div>
                {
                    this.props.messages.map(c => {
                        const TypeMessageControl = c.sender.toString() === this.props.user.idUser.toString() ? 'message-in' : 'message-out';
                        const tailType = c.sender.toString() === this.props.user.idUser.toString() ? 'tail-out' : 'tail-in';
                        const tail = (c.sender.toString() === this.props.user.idUser.toString()) ? Images.out_tail : Images.in_tail;
                        return <Message
                            key={c.id}
                            messageObject={c}
                            tail={tail}
                            type={TypeMessageControl}
                            tailType={tailType}
                            user_icon={Images.image || Images.avatar}
                            contacts={[]}
                            conversationId={this.props.messages.conversationID}
                        />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ conversation, messages, user }) => {
    return {
        conversation: conversation,
        messages: messages,
        user: user,
    }
}

export default connect(mapStateToProps, null)(ChatGeneralConversationContact)