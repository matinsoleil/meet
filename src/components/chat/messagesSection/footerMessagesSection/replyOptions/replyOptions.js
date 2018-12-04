import React, { Component } from 'react'
import { connect } from 'react-redux';
import MessagesHelper from '../../../../../lib/helper/messagesHelper';
import { messageSelected } from '../../../../../redux/actions/messagesOptions/messagesOptions';
import { Images } from "../../../../../redux/states/images";
import './replyOptions.scss';
class ReplyOptions extends Component {

    componentDidMount() {
        let { message, userSend } = this.props.messageObject;
        this.props.setMessage((!message.type) ? message :
            (message.type === "4") && message.message,
            userSend
        );
    }

    componentWillUnmount() {
        this.props.setMessage('', '');
    }

    cancelReply = () => {
        this.props.messageSelected('', true);
    }

    render() {
        let { sender, message } = this.props.messageObject;
        return (
            <div className="reply-options">
                <img src={Images.reply_icon} alt={'reply'} />
                <div className='reply'>
                    <span className="ellipsis-text">{
                        (sender === this.props.userId) ? 'tu' :
                            MessagesHelper.getOwner(this.props.contacts, sender)
                    }</span>
                    <div className="ellipsis-text">{(!message.type) ? message : (message.type === '4') && message.message}</div>
                </div>
                <img onClick={this.cancelReply} src={Images.close_icon} alt={'close'} />
            </div>
        );
    }
}

const mapStateToProps = ({ users, contacts }) => {
    return {
        userId: users.id,
        contacts: contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        messageSelected: (messageId, state) => {
            dispatch(messageSelected(messageId, state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyOptions);