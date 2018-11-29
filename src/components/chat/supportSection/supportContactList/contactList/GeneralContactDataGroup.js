import React, { Component } from 'react'
import {addSelectContact, removeSelectedContact} from "../../../../../redux/actions/views/supportSection";
import './GeneralContactDataGroup.scss'
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
                className='contact-row'
                style={this.props.selectedContacts.includes(contact.id)
                    ?{backgroundColor:'#d9e6f5'}:{}}>
                <div
                    className='info-container'
                    onClick={this.onClickCheck}>
                    <img src={contact.imgContact} alt=""/>
                    <span>{contact.name}</span>
                </div>
                <div
                    style={this.props.selectedContacts.includes(contact.id)
                        ?{backgroundColor:'#5C91F5'}:{}}
                    className='check-box'
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
        dispatch(removeSelectedContact(contactId))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(GeneralContactData)



// <div className="contact-group">
//     <div className={'markerListContactGroup'}>
//     {this.props.flagAlphabet}
// </div>
// <div className="contact-chat-group " onClick={this.addContactGroupClick} >
//     <div className="grid-container-contact-chat-group">
//         <div className="icon-contact-group">
//             <div className="outer-circle-group" >
//                 <img className="img-icon-user-group" src={this.props.contact.imgContact} alt="user" />
//                 <img className="inner-circle-group circle-group" src={this.props.claro_user_icon} alt="claro-user-icon" />
//             </div>
//         </div>
//         <div className="name-contact-group">{this.props.contact.name} </div>
//         <div className="count-message-group">
//             {this.props.contact.onEdit === '1' ? <img className="stateUserGroup " src={this.props.check_mark_check} alt="stateUserGroup" /> :
//                 <img className="stateUserGroup" src={this.props.check_mark_uncheck} alt="stateUserGroup" />}
//         </div>
//     </div>
//     </div>
// </div>