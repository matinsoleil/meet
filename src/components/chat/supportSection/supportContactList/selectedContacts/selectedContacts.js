import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessagesHelper from "../../../../../lib/helper/messagesHelper";
import {removeSelectedContact} from "../../../../../redux/actions/views/supportSection";
import './selectedContacts.scss';
import {showModal} from "../../../../../redux/actions/modalBox/modalBox";

class SelectedContacts extends Component{
    constructor(props){
        super(props);
    }
    removeContact=(id)=>{
        this.props.removeSelectedContact(id);
    }
    render(){
        return(
            <React.Fragment>
                {(this.props.selectedContacts.length>0)&&
                <div
                    className='selected-contacts'>
                    <div className='list'>
                        {this.props.selectedContacts.map(e=>{
                            let contact = MessagesHelper.getContactById(this.props.contacts,e);
                            return (contact)&&
                                <ContactBubble
                                    key={contact.id}
                                    imgContact={contact.imgContact}
                                    name={contact.name}
                                    action={this.removeContact}
                                    id={contact.id}
                                />
                        })}
                    </div>
                    <button onClick={()=>{this.props.action(this.props.selectedContacts)}} >
                        Aceptar
                    </button>
                </div>}
            </React.Fragment>
        );
    }
}

const ContactBubble = ({imgContact,name,action,id}) => {
    return(
        <div className='contact-bubble'>
            <div className='close-button' onClick={()=>{action(id)}}>X</div>
            <img src={imgContact} alt={id}/>
            <span>{name}</span>
        </div>
    );
}

const mapStateToProps = ({contacts,views}) => ({
    selectedContacts: views.supportSection.selectedContacts,
    contacts: contacts
});

const mapsDispatchToProps = dispatch =>({
    removeSelectedContact: (id) => dispatch(removeSelectedContact(id)),
})

export default connect(mapStateToProps,mapsDispatchToProps)(SelectedContacts);
