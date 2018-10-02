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
                <div className="grid-container-contact-chat">
                    <div className="iconContact">                <div className="outer-circle" >
                        <img className="imgIcoUser" src={this.props.imgContact} alt="test" />
                        <div className="inner-circle circle">&nbsp;</div>
                    </div></div>
                    <div className="nameContact">{this.props.nameContact}</div>
                    <div className="dayLastMessage">{this.props.dayLastMessage}</div>
                    <div className="lastMessage">{this.props.lastMessage}</div>
                    <div className="countMessage">
                        <div className="circleCountMessage"><p>{this.props.countMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralContactData;