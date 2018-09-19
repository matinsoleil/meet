import React, { Component } from 'react';
import { connect } from 'react-redux';
class LoginMain extends Component {
    render() {
        return (
            <div>
                <div className="login-header">Cabecera</div>
                <div className="login-body">
                    <div className="login-instructions">
                        Instrucciones (1)
                        <h1>
                            {this.props.Translator.t('FAQ_SEARCH_BOX_PLACEHOLDER')}
                        </h1>
                    </div>
                    <div className="login-qr-code"> QR code</div>
                </div>
            </div>
        );
    }
}
const stateToProps = (state) => {
    console.log(state);
    return {
        Translator: state.country.translator,
        region: state.country.region,
        os: state.os
    }
}
export default connect(stateToProps, null)(LoginMain);