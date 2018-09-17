import React, { Component } from 'react';
import { addNotificationError } from '../../redux/actions/logerror';

class MessageErro extends Component {
    render() {
        addNotificationError(this.props.message, this.props.detail)
        return (
            <div>
                <h2>Oh-no! Something went wrong"</h2>
                <p className="red">
                    {this.props.message}
                </p>
                <div>Component Stack Error Details: </div>
                <p className="red">
                    {this.props.detail}
                </p>
            </div>
        );
    }
}

export default MessageErro;