import React, { Component } from 'react';
import HeaderMessagesSection from './headerMessagesSection/headerMessagesSection';
import FooterMessagesSection from './footerMessagesSection/footerMessagesSection';
import ChatGeneralConversationContact from './chatGeneralConversationContact/ChatGeneralConversationContact';
import InactiveChat from './inactiveChat/inactiveChat';
import './messagesSectionContainer.scss'
class MessagesSectionContainer extends Component {
    render() {
        return (
            <div className='messages-section-container' >
                {this.props.contact.id ? (
                    <ActiveChat
                        label={this.props.contact.label}
                        chatName={this.props.contact.name}
                        chat={this.props.chat}
                        contacts={this.props.contacts}
                        contact={this.props.activeChat}
                        server={this.props.server}
                    />
                ) : (
                        <InactiveChat/>
                    )}
            </div>
        );
    }
}

const ActiveChat = (props) => {
    return (
        <React.Fragment>
            <HeaderMessagesSection chatName={props.chatName} label={props.label} />
            <ChatGeneralConversationContact contact={props.contact} contacts={props.contacts} chat={props.chat} />
            <FooterMessagesSection serverChat={props.server} />
        </React.Fragment>
    );
}

export default MessagesSectionContainer;