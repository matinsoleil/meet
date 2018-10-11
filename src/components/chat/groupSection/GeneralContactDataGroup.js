import React, { Component } from 'react';
import './GeneralContactDataGroup.scss'
class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // this.props.onClick(this.props.id)
        alert("Add contact and new group " + this.props.contact.id);
    }
    render() {
        return (
            <div>
                <div className="markerListContactGroup">
                    {this.props.contact.name[0]}
                </div>
                <div className="contact-chat-group" onClick={this.handleClick} >
                    <div className="grid-container-contact-chat-group">
                        <div className="icon-contact-group">
                            <div className="outer-circle-group" >
                                <img className="img-icon-user-group" src={this.props.contact.imgContact} alt="test" />
                                <div className="inner-circle-group circle-group">&nbsp;</div>
                            </div>
                        </div>
                        <div className="name-contact-group">{this.props.contact.name}</div>
                        <div className="count-message-group">
                            <div className="circle-count-message-group"><p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GeneralContactData;