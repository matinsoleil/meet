import React, { Component } from 'react'
import searchContacts from '../../../redux/actions/contacts/searchContacts'
import hideSectionGroups from '../../../redux/actions/groups/hideSectionGroups'
import { getGroups } from '../../../redux/selectors/groups';
import ContactAddGroup from './ContactAddGroup'
import { connect } from 'react-redux'
import './HeaderGroupSection.scss'

class HeaderGroupSection extends Component {
  filterList = contacts => event => {
    const val = event.target.value.toLowerCase();
    const listContactsFecth = this.props.list_contacts.filter(v => v.name.toLowerCase().includes(val));
    this.props.searchContacts(listContactsFecth);
  };
  render() {
    const list_contacts_add_group = this.props.list_contacts_add_group;
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
                <ContactAddGroup key={contact.id} contact={contact} onClick={this.handleClick} />
              )
              }
            </div>
          </div>
          <div className="search-contact">
            <input type="text" className="input-search" placeholder="Buscar"
            // onChange={this.filterList(this.props.user.contacts)}
            ></input>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchContacts: (listContactsFecth) => {
      dispatch(searchContacts(listContactsFecth));
    },
    hideSectionGroups: () => {
      dispatch(hideSectionGroups());
    }
  }
}
const mapStateToProps = (state) => {
  return {
      groups: getGroups(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupSection);