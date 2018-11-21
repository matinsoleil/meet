import HeaderGroupSection from './HeaderRightSection/HeaderGroupSection';
import ContactList from './ContactList/ContactList';
import React, { Component } from 'react'
import { getGroupsSection } from '../../../redux/selectors/groupsSection'
import { getContacts } from '../../../redux/selectors/contacts'
import { connect } from 'react-redux'
import './RightSideContactList.scss'

class RightSideContactList extends Component {
    render() {
        const list_contacts = this.props.contacts
        const list_contacts_add_group = this.props.groupsSection.list_contacts_add_group
        const filter_contacts = this.props.groupsSection.filter_contacts
        return (
            <div className="group-section-container">
                <HeaderGroupSection action={this.props.action} title={this.props.title} list_contacts={list_contacts} list_contacts_add_group={list_contacts_add_group} filter_contacts={filter_contacts} />
                <ContactList contacts={list_contacts} list_contacts_add_group={list_contacts_add_group} filter_contacts={filter_contacts} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        groupsSection: getGroupsSection(state),
        contacts: getContacts(state)
    }
}
export default connect(mapStateToProps)(RightSideContactList);