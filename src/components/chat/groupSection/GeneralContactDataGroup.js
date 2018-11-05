import React, { Component } from 'react'
import './GeneralContactDataGroup.scss'
import { connect } from 'react-redux'
import updateListContactsGroup from '../../../redux/actions/groups/updateListContactsGroup'

class GeneralContactData extends Component {

    constructor(props) {
        super(props)
        this.addContactGroupClick = this.addContactGroupClick.bind(this)
        this.userChecked = false;
        this.currentListGroup=this.props.groups.list_contacts_add_group;
    }

    addContactGroupClick() {
       
        let existentUserId = undefined;
           console.log('contact:');
          
           console.log(this.props.contact);
           this.currentListGroup.map(match=>{
               if(this.props.contact.id===match.id){
                 existentUserId=match.id;
               }
               return existentUserId;
           })
            if(existentUserId===undefined){
            this.props.onClick(this.props.contact.id);
            this.userChecked = true;
            this.props.contact.onEdit="1"
            
            }else{
            this.props.onClick(this.props.contact.id);  
            this.userChecked = false;
            this.props.contact.onEdit="0";
            }
    }

    render() {
        return (
            <div className="contact-group">
                <div className={'markerListContactGroup'}>
                    {this.props.flagAlphabet}
                </div>
                <div className="contact-chat-group" onClick={this.addContactGroupClick} >
                    <div className="grid-container-contact-chat-group">
                        <div className="icon-contact-group">
                            <div className="outer-circle-group" >
                                <img className="img-icon-user-group" src={this.props.contact.imgContact} alt="user" />
                                <img className="inner-circle-group circle-group" src={this.props.claro_user_icon} alt="claro-user-icon" />
                            </div>
                        </div>
                        <div className="name-contact-group">{this.props.contact.name} </div>
                        <div className="count-message-group">
                                {  this.props.contact.onEdit === '1' ?<img className="stateUserGroup" src={this.props.check_mark_check} alt="stateUserGroup" />:null }
                                {  this.props.contact.onEdit === '0' ?<img className="stateUserGroup" src={this.props.check_mark_uncheck} alt="stateUserGroup" />:null } 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
 
      updateListContactsGroup: (listContacts) => {
        dispatch(updateListContactsGroup(listContacts))
      }
  
    }
  }

const mapStateToProps = state => {
    return {
        onEdit: state.contact.onEdit,
        claro_user_icon: state.customizing.Images.claro_user_icon,
        check_mark_check:  state.customizing.Images.check_mark_check ,
        check_mark_uncheck:  state.customizing.Images.check_mark_uncheck
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GeneralContactData)