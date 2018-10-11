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
                {this.props.activeChat ? (
                    <ActiveChat
                        chatName={this.props.chatName}
                        subTitle={this.props.subTitle}
                        chat={this.props.chat}
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
            <HeaderMessagesSection chatName={props.chatName} subTitle={props.subTitle} />
            <ChatGeneralConversationContact chat={props.chat} />
            <div></div>
            <FooterMessagesSection />
        </React.Fragment>
    );
}

export default MessagesSectionContainer;