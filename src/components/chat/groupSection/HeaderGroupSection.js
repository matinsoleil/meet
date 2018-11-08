import React, { Component } from 'react'
import updateFilterContactsAddGroup from '../../../redux/actions/groups/updateFilterContactsAddGroup'
import hideSectionRight from '../../../redux/actions/rightSection/hideSectionRight'
import updateListContactsGroup from '../../../redux/actions/groups/updateListContactsGroup'
import updateListContactsAddGroup from '../../../redux/actions/groups/updateListContactsAddGroup'
import addContact from '../../../redux/actions/contacts/addContact'
import CreateGroupForm from '../../form/group/CreateGroupForm'
import AlertCreateGroupForm from '../../form/group/AlertCreateGroupForm'
import showAlertGeneral from '../../../redux/actions/alertGeneral/showAlertGeneral'
import { getGroupsSection } from '../../../redux/selectors/groupsSection'
import ContactAddGroup from './ContactAddGroup'
import ModalBoxChat from '../../modals/ModalBox'
import { connect } from 'react-redux'
import './HeaderGroupSection.scss'

class HeaderGroupSection extends Component {
  constructor(props) {
    super(props)
    this.typeText = 'addTo'
    this.typeButton = 'aceptTo'
    this.state = { showModalCreateGroup: false }
    this.deleteContactListCreateGroup = this.deleteContactListCreateGroup.bind(this)
    this.closeWindowFormCreateGroup = this.closeWindowFormCreateGroup.bind(this)
    this.submitCreateGroup = this.submitCreateGroup.bind(this)
    this.filterList = this.filterList.bind(this)
    this.openWindowFormCreateGroup = this.openWindowFormCreateGroup.bind(this)
    this.listContacts = []
    this.assingedIds = []
  }

  deleteContactListCreateGroup(idContact) {
    this.listContacts = this.props.list_contacts
    var listAddContactsGroup = this.props.list_contacts_add_group
    for (var i = 0; i < this.listContacts.length; i++) {
      if (this.listContacts[i].id == idContact) {
        this.listContacts[i].onEdit = '0';
      }
    }
    var indexContact = listAddContactsGroup.findIndex(item => item.id === idContact)
    listAddContactsGroup.splice(indexContact, 1)
    this.props.updateListContactsGroup(this.listContacts)
    this.props.updateListContactsAddGroup(listAddContactsGroup)
  }

  submit = values => {
    console.log(values)
  }

  openWindowFormCreateGroup() {
    this.setState({
      showModalCreateGroup: true
    })
  }

  closeWindowFormCreateGroup() {
    this.setState({
      showModalCreateGroup: false
    })
  }

  submitCreateGroup = values => {
    const name = values.nameGroup
    const id = Math.floor(+new Date() / 1000)
    const newGroupElemnt = {
      "id": id.toString(),
      "name": name,
      "photo": "ruta",
      "status": null,
      "lastState": null,
      "label": null,
      "dayLastMessage": null,
      "lastMessage": null,
      "countMessage": null,
      "silence": "0",
      "file": "0",
      "pinner": "0",
      "imgContact": "https://imageog.flaticon.com/icons/png/512/27/27825.png",
      "ounner": [
        "1"
      ],
      "typeChat": "2"
    }
    this.props.addContact(newGroupElemnt)
    this.setState({
      showModalCreateGroup: false
    })
    this.props.hideSectionRight()
    this.props.showAlertGeneral('Se creo el nuevo grupo ' + name)
  }

  renderBodyCreateGroup = () => {
    if (this.props.list_contacts_add_group.length === 0) {
      return (<AlertCreateGroupForm closeWindow={this.closeWindowFormCreateGroup} />)
    } else {
      return (<CreateGroupForm onSubmit={this.submitCreateGroup} closeWindow={this.closeWindowFormCreateGroup} />)
    }
  }

  filterList(event) {
    const val = event.target.value.toLowerCase()
    const currentGroupList = this.props.list_contacts_add_group;
    var listContactsFecth = this.props.list_contacts.filter(v => v.name.toLowerCase().includes(val));
    this.props.updateFilterContactsAddGroup(listContactsFecth)
  }

  render() {
    const list_contacts_add_group = this.props.list_contacts_add_group
    return (
      <div className="main-header-group-section">
        <div className="resendTo">
          {

            this.typeText === "addTo" ? <span className="content-resendTo"><p className="text-resendTo">Agregar a:</p><p className="user-resendTo"></p></span> : null
          }
          {
            this.typeText === "resendTo" ? <span className="content-resendTo"><p className="text-resendTo">Reenviar a:</p><p className="user-resendTo"></p></span> : null

          }
          <img src={this.props.cancel_icon} className="closeGroup" onClick={this.props.hideSectionRight} alt="addGroup" />
        </div>
        <div className="grid-container-header-section">
          <div className="block-right"></div>
          <div className="header-group" >
            {

              this.typeButton === "addGroup" ? <img className="addGroup" src={this.props.send_icon} alt="addGroup" /> : null
            }
            {
              this.typeButton === "aceptTo" ? <button className="acceptAddGroup" onClick={this.openWindowFormCreateGroup} >{'Aceptar'}</button> : null

            }
            <div className="grow-group">
              {list_contacts_add_group !== null ?
                list_contacts_add_group.map(contact =>
                  <ContactAddGroup key={contact.id} contact={contact} onClick={this.deleteContactListCreateGroup} />
                ) : null}
            </div>
            {this.state.showModalCreateGroup ? <ModalBoxChat body={this.renderBodyCreateGroup()} /> : null}
          </div>
          <div className="search-contact-group">
            <div className="search-box">
              <img className="seach-icon-contact" src={this.props.search_icon} alt="seach-icon" />
              <input type="text" className="input-search" placeholder="Buscar" onChange={this.filterList} ></input></div>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  var account = { onEdit: '1' };
  return {
    updateFilterContactsAddGroup: (listContactsFecth) => {
      dispatch(updateFilterContactsAddGroup(listContactsFecth))
    },
    hideSectionRight: () => {
      dispatch(hideSectionRight())
    },
    updateListContactsGroup: (listContacts) => {
      dispatch(updateListContactsGroup(listContacts))
    },
    updateListContactsAddGroup: (listContacts) => {
      dispatch(updateListContactsAddGroup(listContacts))
    },
    addContact: (newContact) => {
      dispatch(addContact(newContact))
    },
    showAlertGeneral: (msj) => {
      dispatch(showAlertGeneral(msj))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    send_icon: state.customizing.Images.send_icon,
    search_icon: state.customizing.Images.search_icon,
    cancel_icon: state.customizing.Images.cancel_icon,
    groupsSection: getGroupsSection(state),
    onEdit: state.contact.onEdit
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupSection)