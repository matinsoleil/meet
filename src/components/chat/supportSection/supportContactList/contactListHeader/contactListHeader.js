import React, {Component} from 'react'
import SeachBar from './../../../searchBar/searchBar';
import './contactListHeader.scss';
import assignFilterAction from "../../../searchBar/assignFilterAction";
import {onChangelFilter} from "../../../../../redux/actions/views/supportSection";
import {Images} from "../../../../../redux/states/images";

class ContactListHeader extends Component {
  constructor(props) {
    super(props)
  }

  // submitCreateGroup = values => {
  //   const name = values.nameGroup
  //   const id = Math.floor(+new Date() / 1000);
  //   const newGroupElemnt = {
  //     "id": id.toString(),
  //     "name": name,
  //     "photo": "ruta",
  //     "status": null,
  //     "lastState": null,
  //     "label": null,
  //     "dayLastMessage": null,
  //     "conversations": id.toString(),
  //     "lastMessage": null,
  //     "countMessage": "",
  //     "silence": "0",
  //     "file": "0",
  //     "pinner": "0",
  //     "imgContact": "https://imageog.flaticon.com/icons/png/512/27/27825.png",
  //     "owner": [
  //       "1"
  //     ],
  //     "typeChat": "2",
  //     "contactsIds": this.props.groupsSection.list_contacts_add_group
  //   }
  //   const newConversation = {
  //     "id": id.toString(),
  //     "contactos": ["U1", "9999"],
  //     "conversation": []
  //   }
  //   this.props.action(newConversation,newGroupElemnt);
  //   this.props.showModal();
  //   this.clearClose()
  //   this.props.showAlertGeneral('Se creo el nuevo grupo ' + name)
  //
  // }

  render() {
    const SearchBarWithAction = assignFilterAction(SeachBar,onChangelFilter);
    return (
        <div className='contact-list-header'>
          <div className='top'>
            <span className='title'>{this.props.title}</span>
              <img src={Images.cancel_icon} alt="close"/>
          </div>
          <div className='bottom'>
            <SearchBarWithAction/>
          </div>
        </div>
    )
  }
}


export default ContactListHeader ;

