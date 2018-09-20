import React, { Component } from 'react';
import { connect } from 'react-redux';
class LoginMain extends Component {
    render() {
        return (
            <div>
                <div className="login-header">
                    {this.props.Translator.t('header_login')}
                </div>
                <div className="login-body">
                    <div className="login-instructions">
                        {this.props.Translator.t('instructions_login')}
                    </div>
                    <div className="login-qr-code">
                        {this.props.Translator.t('QR_Code_login')}
                    </div>
                </div>
            </div>
        );
    }
}
const stateToProps = (state) => {
    return {
        Translator: state.country.translator,
        region: state.country.region,
        os: state.os
    }
}
export default connect(stateToProps, null)(LoginMain);