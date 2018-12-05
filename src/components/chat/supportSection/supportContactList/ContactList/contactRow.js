import React, { Component } from 'react'
import {addSelectContact, removeSelectedContact} from "../../../../../redux/actions/views/supportSection";
import './contactRow.scss'
import { connect } from 'react-redux'

class GeneralContactData extends Component {

    constructor(props) {
        super(props);
    }

    onClickCheck = () => {
        const {contact} = this.props;
        if(!this.props.selectedContacts.includes(contact.id)){
            this.props.addSelectContact(this.props.contact.id);
        }else{
            this.props.removeSelectedContact(this.props.contact.id);
        }
    }

    render() {
        const {contact} = this.props;
        return (
            <div
                className={`contact-row ${this.props.selectedContacts.includes(contact.id)&&'selected'}`}
            >
                <div
                    className='info-container'
                    onClick={this.onClickCheck}>
                    <img src={contact.imgContact} alt=""/>
                    <span>{contact.name}</span>
                </div>
                <div className='check-box'
                     onClick={this.onClickCheck}>
                    <span></span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({views}) => ({
    selectedContacts: views.supportSection.selectedContacts
});

const mapDispatchToProps = dispatch => ({
    addSelectContact: (contactId) => {
        dispatch(addSelectContact(contactId));
    },
    removeSelectedContact: (contactId) => {
        dispatch(removeSelectedContact([contactId]))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(GeneralContactData);