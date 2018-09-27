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
                <h5 className="nameUser">{this.props.nameContact}</h5>
                {this.props.status}
                {this.props.dayLastMessage}
                {this.props.lastMessage}
            </div>
        )
    }
}

export default GeneralContactData;