import React, {Component} from 'react';
import {connect} from 'react-redux';
import {togglePopup} from "../../redux/actions/views/popup";
class Popup extends Component{

    componentDidUpdate(){
        (this.props.show) && this.startTimerToClose();
    }

    startTimerToClose(){
        setTimeout(() => {
            this.props.togglePopup();
        }, this.props.timeToHide)
    }

    render(){
        return (
            <React.Fragment>
                {
                    (this.props.show) &&
                    <div className="message-popup" hidden={!this.props.show}>
                        <p className="text-message-popup"> { this.props.message } </p>
                    </div>
                }
            </React.Fragment>
        );
    }

}
const mapStateToProps = state =>({
    show:state.views.popup.show,
    message: state.views.popup.message,
    autoClose: state.views.popup.autoClose,
    timeToHide: state.views.popup.timeToHide
});
const mapDispatchToProps = dispatch => ({
    togglePopup: () => {
        dispatch(togglePopup());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Popup);