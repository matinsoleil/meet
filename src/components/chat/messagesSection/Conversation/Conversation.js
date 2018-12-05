import React from 'react';
import HeaderMessagesSection from '../headerMessagesSection/headerMessagesSection';
import ChatGeneralConversationContact from '../chatGeneralConversationContact/ChatGeneralConversationContact';
import FooterMessagesSection from '../footerMessagesSection/footerMessagesSection';

export const Conversation = () => {
    return (
        <React.Fragment>
            <HeaderMessagesSection/>
            <ChatGeneralConversationContact/>
            <FooterMessagesSection/>
        </React.Fragment>
    )
};