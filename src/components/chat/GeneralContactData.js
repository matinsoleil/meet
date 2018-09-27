import React, { Component } from 'react';

class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.props.id)
    }
    render() {
        return (
            <div className="contact-chat" onClick={this.handleClick} >
                <div className="icon-user">
                    <img className="imgIcoUser" src={this.props.imgContact} alt="test" />
                    <div class="circleActive circleBase"></div>
                </div>
                <h5 className="descriptionUser">{this.props.nameContact}</h5>
                <h1 className="descriptionUser">{this.props.status}</h1>
                <h1 className="descriptionUser">{this.props.dayLastMessage}</h1>
                <h1 className="descriptionUser">{this.props.lastMessage}</h1>
            </div>
        )
    }
}

export default GeneralContactData;