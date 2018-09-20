import React, { Component } from 'react';
import { addNotificationError } from '../../redux/actions/logerror';
import { connect } from 'react-redux';

class MessageError extends Component {
    render() {
        addNotificationError(this.props.message, this.props.detail)
        return (
            <div>
                <h2>{this.props.Translator.t('Oh_no_Something_Went_Wrong')}</h2>
                <p className="red">
                    {this.props.message}
                </p>
                <div>{this.props.Translator.t('Component_Stack_Error_Details')} </div>
                <p className="red">
                    {this.props.detail}
                </p>
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
export default connect(stateToProps, null)(MessageError);
