import React, { Component } from 'react';
class LoginMain extends Component {
    render() {
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
}

export default LoginMain;