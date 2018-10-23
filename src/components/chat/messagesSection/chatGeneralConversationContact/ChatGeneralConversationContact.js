import React, { Component } from 'react';
import './ChatGeneralConversationContact.scss';
import { connect } from 'react-redux';
import Message from './Message';

class ChatGeneralConversationContact extends Component {
    render() {
        return (
            <div id='#main-chat-feed' style={{ backgroundImage: `url(${this.props.background})` }} className="main-chat-history-conversation-contact">
                <div className="initial"></div>
                {this.props.chat.map(c => {
                    const TypeMessageControl = c.userSend === "1" ? 'message-in' : 'message-out';
                    const tailType = c.userSend === "1" ? 'tail-out' : 'tail-in';
                    const tail = (c.userSend === "1") ? this.props.out_tail : this.props.in_tail;
                    return <Message
                        key={c.id}
                        messageObject={c}
                        tail={tail}
                        type={TypeMessageControl}
                        tailType={tailType}
                        user_icon={this.props.contact.imgContact}
                        contacts={this.props.contacts}
                    />
                })}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        background: state.customizing.Images.chat_background,
        in_tail: state.customizing.Images.in_tail,
        out_tail: state.customizing.Images.out_tail,
        contact: state.contact
    }
}

export default connect(mapStateToProps, null)(ChatGeneralConversationContact);