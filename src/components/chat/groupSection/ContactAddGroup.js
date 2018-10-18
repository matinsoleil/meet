import React, { Component } from 'react';
import './ContactAddGroup.scss'
class ContactAddGroup extends Component {
    constructor(props) {
        super(props);
        this.deleteContactListCreateGroup = this.deleteContactListCreateGroup.bind(this);
    }
    deleteContactListCreateGroup() {
        this.props.onClick(this.props.contact.id)
    }
    render() {
        return (
            
                <div className="contact-add-group"  >
                    <div className="grid-container-contact-add-group">

                        <div className="icon-contact-add-group">
                            <div className="outer-circle-contact-add-group" >
                                <img className="img-icon-contact-add-group" src={this.props.contact.imgContact} alt="test" />
                            </div>
                        </div>
                        <div className="count-message-contact-add-group" onClick={this.deleteContactListCreateGroup}>
                            <div className="circle-count-message-contact-add-group">
                                <p>X</p>
                            </div>
                        </div>
                        <div className="name-contact-add-group">
                            {this.props.contact.name}
                        </div>
 
                    </div>
                </div>
            
        )
    }
}
export default ContactAddGroup;