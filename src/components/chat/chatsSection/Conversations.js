import React, {Component} from 'react';
import ConversationItem from './ConversationItem'
import {connect} from 'react-redux';

class Conversations extends Component {
    render() {
        return (
            <div className="main-chat-general-list-contact">
                {this.props.conversations.map(conversation => <ConversationItem conversation={conversation} key={conversation.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = ({conversations}) => {
    return {
        conversations
    };
};

export default connect(mapStateToProps, null) (Conversations);