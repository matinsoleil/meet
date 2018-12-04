import React, { Component } from 'react';
import { connect } from 'react-redux'
import './headerMessagesSection.scss';
class headerMessagesSection extends Component {
    render() {
        return (
            <header className='header-messages-section'>
                <span className='title' >{this.props.conversation.name}</span>
                <SectionTitle conversation={this.props.conversation} />
            </header>
        );
    }
}

const SectionTitle = (props) => {
    if (props.conversation.type === "basic") {
        return <span className='subtitle' >{props.conversation.label}</span>;
    } else {
        return props.conversation.members.map(
            member => { return member.name; }).join(", ");
    }
}

const mapStateToProps = ({ conversation }) => {
    return {
        conversation: conversation,
    }
}

export default connect(mapStateToProps, null)(headerMessagesSection)