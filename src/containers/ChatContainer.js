import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import GeneralDataUser from '../components/chat/GeneralDataUser';
import ActionsContactConversation from '../components/chat/ActionsContactConversation';
import ListGeneralContacts from '../components/chat/ListGeneralContacts';
import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact';

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
                        <div className="main-chat-area-send-conversation">
                            Envio de mensajes
                        </div>
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
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

export default ChatContainer;