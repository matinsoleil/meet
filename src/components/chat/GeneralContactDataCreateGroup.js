import React, { Component } from 'react';

class GeneralContactDataCreateGroup extends Component {
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
                    <div className="icon-contact">
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.imgContact} alt="test" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="name-contact">{this.props.nameContact}</div>
                    <div className="count-message">
                        <div className="circle-count-message"><p>{this.props.countMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralContactDataCreateGroup;