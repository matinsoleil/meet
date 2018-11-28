import React, { Component } from 'react';
import HeaderMessagesSection from './headerMessagesSection/headerMessagesSection';
import FooterMessagesSection from './footerMessagesSection/footerMessagesSection';
import ChatGeneralConversationContact from './chatGeneralConversationContact/ChatGeneralConversationContact';
import InactiveChat from './inactiveChat/inactiveChat';
import { connect } from 'react-redux'
import './messagesSectionContainer.scss'
class MessagesSectionContainer extends Component {

    render() {
        return (
            <div className='messages-section-container' >
                {this.props.contact ? (
                    <ActiveChat
                        label={this.props.contact.label}
                        contactsIds={this.props.contact.contactsIds}
                        chatName={this.props.contact.name}
                        chat={this.props.chat}
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
    return (
        <React.Fragment>
            <HeaderMessagesSection chatName={props.chatName} label={props.label} contactsIds={props.contactsIds} />
            <ChatGeneralConversationContact contact={props.contact} contacts={props.contacts} chat={props.chat} />
            <FooterMessagesSection serverChat={props.server} />
        </React.Fragment>
    );
}

const mapStateToProps = ({ user, contact }) => {
    return {
        user: user,
        contact: contact
    }
}

export default connect(mapStateToProps, null)(MessagesSectionContainer)