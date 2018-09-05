import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';

class LoginContainer extends Component {
    renderBody = () => {
        return (
            <div>
                <div className="login-header">Cabecera</div>
                <div className="login-body">
                    <div className="login-instructions">Instrucciones</div>
                    <div className="login-qr-code"> QR code</div>
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
                    footer=''>
                </AppFrame>
            </div>
        );
    }
}

export default LoginContainer;