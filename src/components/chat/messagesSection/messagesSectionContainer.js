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
                {this.props.conversation ? (
                    <ActiveChat
                        label={this.props.conversation.label}
                        members= { this.props.conversation.members }
                        chatName={this.props.conversation.name}
                        chat={[]}
                        contacts={[]}
                        contact={this.props.conversation}
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
            <HeaderMessagesSection/>
            {/* <ChatGeneralConversationContact contact={props.conversation} contacts={props.contacts} chat={props.chat} />
            <FooterMessagesSection serverChat={props.server} /> */}
        </React.Fragment>
    );
}

const mapStateToProps = ({ user, conversation}) => {
    return {
        user: user,
        conversation: conversation,
    }
}

export default connect(mapStateToProps, null)(MessagesSectionContainer)