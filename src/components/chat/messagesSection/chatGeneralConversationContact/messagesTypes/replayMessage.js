import React from 'react';
import {connect} from 'react-redux';
import MessagesHelper from '../../../../../lib/helper/messagesHelper';


let ReplyMessage = (props) => {
    return (
        <div>
            <div className="reply">
                <div className="content">
                    <span className="owner">{
                        (props.senderId === props.userId) ? 'tu' :
                            MessagesHelper.getOwner(props.contacts, props.senderId)
                    }</span>
                    <div className="toReply">{props.message.toReply}</div>
                </div>
            </div>
            {props.message.message}
        </div>
    );
}
export default ReplyMessage = connect((state) => ({
    userId: state.users.id
}))(ReplyMessage);