import React, { Component } from 'react';
import HeaderMessagesSection from './headerMessagesSection/headerMessagesSection';
import FooterMessagesSection from './footerMessagesSection/footerMessagesSection';
import ChatGeneralConversationContact from './chatGeneralConversationContact/ChatGeneralConversationContact';
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
                        <div></div>
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
            <FooterMessagesSection />
        </React.Fragment>
    );
}

export default MessagesSectionContainer;