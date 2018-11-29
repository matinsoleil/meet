import React, { Component } from 'react';
import HeaderMessagesSection from './headerMessagesSection/headerMessagesSection';
import FooterMessagesSection from './footerMessagesSection/footerMessagesSection';
import ChatGeneralConversationContact from './chatGeneralConversationContact/ChatGeneralConversationContact';
import InactiveChat from './inactiveChat/inactiveChat';
import { connect } from 'react-redux'
import './messagesSectionContainer.scss'
class MessagesSectionContainer extends Component {
    render() {
        // console.log(" 0 0 0 ");
        // console.log(this.props);
        // console.log(" 1 1 1 ");
        return (
            <div className='messages-section-container' >
                {this.props.contact ? (
                    <ActiveChat
                        label={this.props.contact.label}
                        members= { this.props.contact.members }
                        chatName={this.props.contact.name}
                        chat={this.props.conversation}
                        contacts={this.props.contacts}
                        contact={this.props.contact}
                        server={this.props.server}
                    />
                ) : (
                        <InactiveChat />
                    )}
            </div>
        );
    }
}

const ActiveChat = (props) => {

    // Si console.log(props.contact)
    // Si console.log(props.chat)
    // No console.log(props.contacts)
    
    return (
        <React.Fragment>
            <HeaderMessagesSection chatName={props.chatName} label={props.label} members={props.members} />
            <ChatGeneralConversationContact contact={props.contact} contacts={props.contacts} chat={props.chat} />
            <FooterMessagesSection serverChat={props.server} />
        </React.Fragment>
    );
}

const mapStateToProps = ({ user, contact, conversation }) => {
    return {
        user: user,
        contact: contact,
        conversation: conversation
    }
}

export default connect(mapStateToProps, null)(MessagesSectionContainer)