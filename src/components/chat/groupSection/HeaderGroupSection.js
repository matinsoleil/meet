import React, { Component } from 'react'
import updateFilterContactsAddGroup from '../../../redux/actions/groups/updateFilterContactsAddGroup'
import hideSectionGroups from '../../../redux/actions/groups/hideSectionGroups'
import updateListContactsGroup from '../../../redux/actions/groups/updateListContactsGroup'
import updateListContactsAddGroup from '../../../redux/actions/groups/updateListContactsAddGroup'
import creacteGroup from '../../../redux/actions/groups/createGroup'
import CreateGroupForm from '../../form/group/CreateGroupForm'
import AlertCreateGroupForm from '../../form/group/AlertCreateGroupForm'
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
    this.closeWindowFormCreateGroup = this.closeWindowFormCreateGroup.bind(this);
    this.submitCreateGroup = this.submitCreateGroup.bind(this);
    this.filterList = this.filterList.bind(this);
    this.openWindowFormCreateGroup = this.openWindowFormCreateGroup.bind(this);
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
  submit = values => {
    console.log(values)
  }
  openWindowFormCreateGroup() {
    this.setState({
      showModalCreateGroup: true
    });
  }

  closeWindowFormCreateGroup() {
    this.setState({
      showModalCreateGroup: false
    });
  }

  submitCreateGroup = values => {
    let newGroup = this.props.list_contacts_add_group
    let newGroupElemnt = []
    newGroupElemnt.push({ contacts: newGroup }, { name: values.nameGroup })
    this.props.creacteGroup(newGroupElemnt)
    this.setState({
      showModalCreateGroup: false
    })
  }

  renderBodyCreateGroup = (contacts) => {
    if (this.props.list_contacts_add_group.length === 0) {
      return (<AlertCreateGroupForm closeWindow={this.closeWindowFormCreateGroup} />);
    } else {
      return (<CreateGroupForm onSubmit={this.submitCreateGroup} closeWindow={this.closeWindowFormCreateGroup} />);
    }
  }

  render() {
    const list_contacts_add_group = this.props.list_contacts_add_group
    return (
      <div className="main-header-group-section">
        <div className="resendTo">
          <span className="content-resendTo"><p className="text-resendTo">Reenviar a:</p><p className="user-resendTo"></p></span>
          <img src={this.props.cancel_icon} className="closeGroup" onClick={this.props.hideSectionGroups} alt="addGroup" />
        </div>
        <div className="grid-container-header-section">
          <div className="header-group">
            <img className="addGroup" src={this.props.send_icon} onClick={this.openWindowFormCreateGroup} alt="addGroup" />
            <div className="grow-group">
              {list_contacts_add_group.map(contact =>
                <ContactAddGroup key={contact.id} contact={contact} onClick={this.deleteContactListCreateGroup} />
              )
              }

            </div>

            {this.state.showModalCreateGroup ? <ModalBoxChat body={this.renderBodyCreateGroup(null)} /> : null}
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
    },
    creacteGroup: (listContacts) => {
      dispatch(creacteGroup(listContacts))
    }

  }
}

const mapStateToProps = (state) => {
  return {
    send_icon: state.customizing.Images.send_icon,
    search_icon: state.customizing.Images.search_icon,
    cancel_icon: state.customizing.Images.cancel_icon,
    groups: getGroups(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupSection)