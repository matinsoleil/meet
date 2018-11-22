import React, { Component } from 'react';

class Popup extends Component{

    componentDidMount(){
        if(this.props.autoclose){
            this.startTimerToClose();
        }
    }

    startTimerToClose(){
        setTimeout(() => {

        }, this.props.timeToHide)
    }

    render(){
        return (
            <div className="message-popup">
                <p className="text-message-popup"> { this.props.message } </p>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    //togglePopup:
};

export default Popup;