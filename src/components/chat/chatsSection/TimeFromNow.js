import React, {Component} from 'react';
import {connect} from 'react-redux';

class TimeFromNow extends Component {

    constructor(props) {
        super(props);
        this.dateText = this.transformDateFromNow(props.date);
    }

    componentDidUpdate() {
        this.dateText = this.transformDateFromNow(props.date);
    }

    render() {
        return (
            <React.Fragment>
                <span>{this.dateText}</span>
            </React.Fragment>
        );
    }

    transformDateFromNow(timestamp) {
        moment.locale(this.props.dialect);
        const message = moment(parseInt(timestamp)).fromNow();
        return message.charAt(0).toUpperCase() + message.slice(1);
    }

}

const mapStateToProps = ({views}) => {
    return {
        signalToRerender: views.timeFromNow.signalToRerender
    };
};

export default connect(null, null)(TimeFromNow);