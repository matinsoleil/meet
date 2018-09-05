import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import LoginMain from '../components/login/LoginMain';

class LoginContainer extends Component {
    renderBody = () => {
        return (
            <LoginMain />
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