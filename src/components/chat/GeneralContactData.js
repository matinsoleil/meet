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
                <div class="grid-container-contact-chat">
                    <div class="iconContact">                <div class="outer-circle" >
                        <img className="imgIcoUser" src={this.props.imgContact} alt="test" />
                        <div class="inner-circle circle">&nbsp;</div>
                    </div></div>
                    <div class="nameContact">{this.props.nameContact}</div>
                    <div class="dayLastMessage">{this.props.dayLastMessage}</div>
                    <div class="lastMessage">{this.props.lastMessage}</div>
                    <div class="countMessage">
                        <div className="circleCountMessage"><p>{this.props.countMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralContactData;