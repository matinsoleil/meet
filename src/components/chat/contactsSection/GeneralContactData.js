import React, { Component } from 'react';
import './GeneralContactData.scss'
class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.props.contact.id)
    }
    render() {
        return (
            <div className="contact-chat" onClick={this.handleClick} >
                <div className="grid-container-contact-chat">
                    <div className="icon-contact">
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.contact.imgContact} alt="test" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="name-contact">{this.props.contact.name}</div>
                    <div className="day-last-message"><p>{this.props.contact.dayLastMessage}</p></div>
                    <div className="last-message">{this.props.contact.lastMessage}</div>
                    <div className="count-message">
                        <div className="circle-count-message"><p>{this.props.contact.countMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralContactData;