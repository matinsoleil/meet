import React, { Component } from 'react';
import './ContactAddGroup.scss'
class ContactAddGroup extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert("Delete contact " + this.props.id);
    }
    render() {
        return (
            <div>
                <div className="contact-add-group"  >
                    <div className="grid-container-contact-add-group">
                        <div className="icon-contact-add-group">
                            <div className="outer-circle-contact-add-group" >
                                <img className="img-icon-contact-add-group" src={this.props.imgContact} alt="test" />
                            </div>
                        </div>
                        <div className="name-contact-add-group">{this.props.nameContact}</div>
                        <div className="count-message-contact-add-group" onClick={this.handleClick}>
                            <div className="circle-count-message-contact-add-group"><p>X</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactAddGroup;