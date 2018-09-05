import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';

class ChatContainer extends Component {
    renderBody = () => {
        return (
            <div >
                <div>
                    <div>datos generales usuario</div>
                    <div>Usuario con que chatea</div>
                </div>
                <div>
                    <div>
                        Lista de contactos
                    </div>
                    <div>
                        <div>
                            historial de la conversacion
                        </div>
                        <div>
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