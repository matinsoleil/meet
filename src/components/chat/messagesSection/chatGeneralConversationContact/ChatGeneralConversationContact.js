import React, { Component } from 'react';
import './ChatGeneralConversationContact.scss';
import { connect } from 'react-redux';

class ChatGeneralConversationContact extends Component {
    render() {
        return (
            <div className="main-chat-history-conversation-contact">
                <div className="chat-background" style={{
                    backgroundImage: `url(${this.props.background})`,
                }} ></div>
                <div className="initial"></div>
                {this.props.chat.map(c => {
                    const TypeMessageControl = c.userSend === "1" ? 'message-in' : 'message-out';
                    const tailType = c.userSend === "1" ? 'tail-out' : 'tail-in';
                    const tail = (c.userSend === "1") ? this.props.out_tail : this.props.in_tail;
                    return <Message key={c.id}
                        message={c.message}
                        hour={c.hour}
                        tail={tail}
                        type={TypeMessageControl}
                        tailType={tailType}
                        user_icon={this.props.user.imgUser}
                    />
                })}
            </div>
        );
    }
}

const Message = ({ message, hour, type, tail, tailType, user_icon }) => {
    return (
        <div className="message-row">
            {(type === "message-out")&&<img className="imgIcoUser chat-icon" src={user_icon} alt="" />}
            <div className={`message-bubble ${type}`}>
                <div className="message-wrapper">
                    <span className={`tail ${tailType}`} style={{ backgroundImage: `url(${tail})` }}></span>
                    <div className="message">{message}</div>
                    <span className="time">{hour}</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        background: state.customizing.Images.chat_background,
        in_tail: state.customizing.Images.in_tail,
        out_tail: state.customizing.Images.out_tail,
        user: state.users[0]
    }
}

export default connect(mapStateToProps, null)(ChatGeneralConversationContact);