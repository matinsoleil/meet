import React, { Component } from 'react'
import { connect } from 'react-redux';
import MessagesHelper from '../../../../../lib/helper/messagesHelper';
import { messageSelected } from '../../../../../redux/actions/messagesOptions/messagesOptions';
import './replyOptions.scss';

class ReplyOptions extends Component {

    cancelReply = () => {
        this.props.messageSelected('',true);
    }

    render() {
        let { userSend , message } = MessagesHelper.getMessageById(this.props.conversation, this.props.messageId);
        let { reply_icon, close_icon } = this.props;
        return (
            <div className="reply-options">
                <img src={reply_icon} alt={'reply'} />
                <div className='reply'>
                    <span className="ellipsis-text">{
                        (userSend === this.props.userId) ? 'tu' :
                            MessagesHelper.getOwner(this.props.contacts,userSend)
                    }</span>
                    <div className="ellipsis-text">{(!message.type)&&message}</div>
                </div>
                <img onClick={this.cancelReply} src={close_icon} alt={'close'} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        close_icon: state.customizing.Images.close_icon,
        reply_icon: state.customizing.Images.reply_icon,
        conversation: state.conversation,
        userId: state.users.id,
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return{
        messageSelected: (messageId,state) =>{
            dispatch(messageSelected(messageId,state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyOptions);