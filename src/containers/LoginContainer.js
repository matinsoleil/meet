import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';

class LoginContainer extends Component {
    renderBody = () => {
        return (
            <div>
                <div className="login-header">cabecera</div>
                <div className="login-body">
                    <div className="login-instructions">leyendas</div>
                    <div className="login-qr-code">imagenes</div>
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

export default LoginContainer;