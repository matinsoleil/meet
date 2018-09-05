import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import GeneralDataUser from '../components/chat/GeneralDataUser';

class ChatContainer extends Component {
    renderBody = () => {
        return (
            <div >
                <div className="main-chat-header">
                    <GeneralDataUser />
                    <div className="main-chat-user-connect-conversation-user">Usuario con que chatea</div>
                </div>
                <div className="main-chat-body">
                    <div className="main-chat-general-list-contact">
                        <div className="contact-chat">
                            Contacto
                        </div>
                        <div className="contact-chat">
                            Contacto
                        </div>
                        <div className="contact-chat">
                            Contacto
                        </div>
                        <div className="contact-chat">
                            Contacto
                        </div>
                        <div className="contact-chat">
                            Contacto
                        </div>
                        <div className="contact-chat">
                            Contacto
                        </div>
                        <div className="contact-chat">
                            Contacto
                        </div>
                    </div>
                    <div className="main-chat-general-conversation-contact">
                        <div className="main-chat-history-conversation-contact">
                            <div className="main-chat-transmitter">
                                Emisor 
                            </div>
                            <div className="main-chat-receiver">
                                Receptor
                            </div>
                        </div>
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