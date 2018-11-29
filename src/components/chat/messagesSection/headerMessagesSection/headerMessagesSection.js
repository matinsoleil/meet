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
    var cdn = ""
    var flag = ""
    if (props.conversation.type === "basic") {
        return <span className='subtitle' >{props.conversation.label}</span>;
    } else {
        return props.conversation.members.map(
            member => {
                flag == "" ? cdn = "" : cdn = ","
                flag = ","
                return <span className='subtitle' key={member.id}>  {cdn}  {member.name}</span>
            }
        );
    }
}

const mapStateToProps = ({ conversation }) => {
    return {
        conversation: conversation,
    }
}

export default connect(mapStateToProps, null)(headerMessagesSection)