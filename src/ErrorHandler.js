import React, {Component} from 'react'
import {connect} from "react-redux";
import {addNotificationError} from "./redux/actions/logerror";

class ErrorHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            message: error.toString(),
            detail: info
        });
        // addNotificationError(this.props.message, this.props.detail)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>{this.props.Translator.t('Oh_no_Something_Went_Wrong')}</h2>
                    <p className="red"> {this.state.message} </p>
                    <div>{this.props.Translator.t('Component_Stack_Error_Details')} </div>
                    <p className="red"> {this.state.detail} </p>
                </div>
            );
        }
        return this.props.children;
    }

}

const stateToProps = ({country}) => {
    return {
        Translator: country.translator,
        region: country.region,
    }
};

export default connect(stateToProps, null)(ErrorHandler);