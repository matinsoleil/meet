import React, { Component } from 'react';
import { connect } from 'react-redux'
import './headerMessagesSection.scss';

class HeaderMessagesSection extends Component {

    render() {
        return (
            <header className='header-messages-section'>
                <span className='title' >{this.props.conversation.name}</span>
                <span className='subtitle' >{ this.generateConversationLabel(this.props.conversation) }</span>
            </header>
        );
    }

    generateConversationLabel (conversation) {
        //TODO: use a const with conversation types
        return conversation.type === "basic" ?
            conversation.label :
            conversation.members.map(member => member.name).join(", ");
    }

}

const mapStateToProps = ({ conversation }) => {
    return {
        conversation: conversation,
    }
};

export default connect(mapStateToProps, null)(HeaderMessagesSection)