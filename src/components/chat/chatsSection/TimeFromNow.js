import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';
import 'moment/locale/es';
import 'moment/locale/pt-br';

class TimeFromNow extends Component {

    render() {
        return (
            <React.Fragment>
                <span>{this.transformDateFromNow(this.props.date)}</span>
            </React.Fragment>
        );
    }

    /**
     * Retrieve a relative date from now
     * @param timestamp
     * @returns {string}
     */
    transformDateFromNow(timestamp) {
        moment.locale(this.props.dialect);
        const message = moment(parseInt(timestamp)).fromNow();
        return message.charAt(0).toUpperCase() + message.slice(1);
    }

}

const mapStateToProps = ({views, country}) => {
    return {
        shouldUpdate: views.timeFromNow.shouldUpdate, // Is currently used to force a rerender ;)
        dialect: country.dialect
    };
};

export default connect(mapStateToProps, null)(TimeFromNow);