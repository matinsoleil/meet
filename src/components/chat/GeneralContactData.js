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
                </div>
                <div >
                    {this.props.nameContact}
                </div>
                <div >
                    {this.props.status}
                </div>
                <div >
                    {this.props.dayLastMessage}
                </div>
                <div >
                    {this.props.lastMessage}
                </div>
            </div>
        )
    }
}

export default GeneralContactData;