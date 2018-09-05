import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import GeneralDataUser from '../components/chat/GeneralDataUser';
import ActionsContactConversation from '../components/chat/ActionsContactConversation';
import ListGeneralContacts from '../components/chat/ListGeneralContacts';
import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact';
import AreaSendMessage from '../components/chat/AreaSendMessage';

class ChatContainer extends Component {
    renderBody = () => {
        return (
            <div >
                <div className="main-chat-header">
                    <GeneralDataUser />
                    <ActionsContactConversation />
                </div>
                <div className="main-chat-body">
                    <ListGeneralContacts />
                    <div className="main-chat-general-conversation-contact">
                        <ChatGeneralConversationContact />
                        <AreaSendMessage />
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <AppFrame
                    header=''
                    body={this.renderBody()}
                    footer=''
                    >
                </AppFrame>
            </div>
        );
    }
}

export default ChatContainer;