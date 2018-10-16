import React, { Component } from 'react'
import updateFilterContactsAddGroup from '../../../redux/actions/groups/updateFilterContactsAddGroup'
import hideSectionGroups from '../../../redux/actions/groups/hideSectionGroups'
import updateListContactsGroup from '../../../redux/actions/groups/updateListContactsGroup'
import updateListContactsAddGroup from '../../../redux/actions/groups/updateListContactsAddGroup'
import { getGroups } from '../../../redux/selectors/groups'
import ContactAddGroup from './ContactAddGroup'
import ModalBoxChat from '../../modals/ModalBox'
import { connect } from 'react-redux'
import './HeaderGroupSection.scss'

class HeaderGroupSection extends Component {
  constructor(props) {
    super(props);
    this.state = { showModalCreateGroup: false };
    this.deleteContactListCreateGroup = this.deleteContactListCreateGroup.bind(this);
    this.cancelCreateGroup = this.cancelCreateGroup.bind(this);
    this.createCreateGroup = this.createCreateGroup.bind(this);
    this.filterList = this.filterList.bind(this);
    this.createGroup = this.createGroup.bind(this);  
  }
  filterList(event) {
    const val = event.target.value.toLowerCase();
    const listContactsFecth = this.props.list_contacts.filter(v => v.name.toLowerCase().includes(val));
    this.props.updateFilterContactsAddGroup(listContactsFecth);
  };
  deleteContactListCreateGroup(idContact) {
    var listContacts = this.props.list_contacts
    var filter_contacts = this.props.filter_contacts
    var listAddContactsGroup = this.props.list_contacts_add_group
    var indexContact = listAddContactsGroup.findIndex(item => item.id === idContact)
    var infoContact = listAddContactsGroup.find(item => item.id === idContact)
    listAddContactsGroup.splice(indexContact, 1)
    listContacts.push(infoContact)
    this.props.updateListContactsGroup(listContacts)
    this.props.updateListContactsAddGroup(listAddContactsGroup)
    if (filter_contacts.length !== 0) {
      filter_contacts.push(infoContact)
      this.props.updateFilterContactsAddGroup(filter_contacts);
    }
  }
  createGroup() {
    this.setState({
      showModalCreateGroup: true
    });
  }
  
  cancelCreateGroup(){
    this.setState({
      showModalCreateGroup: false
    });
  }

  createCreateGroup(){
    this.setState({
      showModalCreateGroup: false
    });
  }


  renderBodyCreateGroup = ( contacts ) => {
    return (
      <div className="body-created-group">
        <p>Escribe el nombre del grupo</p>
        <p><input></input></p>
        <button onClick={this.cancelCreateGroup}>Cancelar</button>
        <button onClick={this.createCreateGroup}>Crear</button>
      </div>
    );
  }

  render() {
    const list_contacts_add_group = this.props.list_contacts_add_group
    return (
      <div className="main-header-group-section">
        <div className="grid-container-header-section">
          <div className="header-group">
            Nuevo grupo
            <div onClick={this.props.hideSectionGroups}>
              Cerrar
            </div>
            <div>
              {list_contacts_add_group.map(contact =>
                <ContactAddGroup key={contact.id} contact={contact} onClick={this.deleteContactListCreateGroup} />
              )
              }
            </div>
            <button className="dropbtn" onClick={this.createGroup}>Agregar</button>
            {this.state.showModalCreateGroup ? <ModalBoxChat body={this.renderBodyCreateGroup(null)} /> : null}
          </div>
          <div className="search-contact">
            <input type="text" className="input-search" placeholder="Buscar" onChange={this.filterList} ></input>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateFilterContactsAddGroup: (listContactsFecth) => {
      dispatch(updateFilterContactsAddGroup(listContactsFecth))
    },
    hideSectionGroups: () => {
      dispatch(hideSectionGroups())
    },
    updateListContactsGroup: (listContacts) => {
      dispatch(updateListContactsGroup(listContacts))
    },
    updateListContactsAddGroup: (listContacts) => {
      dispatch(updateListContactsAddGroup(listContacts))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    groups: getGroups(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupSection)