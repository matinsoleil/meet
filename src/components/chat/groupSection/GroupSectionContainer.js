import HeaderGroupSection from './HeaderGroupSection'
import ListGeneralContactsGroup from './ListGeneralContactsGroup'
import React, { Component } from 'react'
import { getGroupsSection } from '../../../redux/selectors/groupsSection'
import { getContacts } from '../../../redux/selectors/contacts'
import fetchGroups from '../../../redux/actions/groups/fetchGroups'
import fetchContacts from '../../../redux/actions/contacts/fetchContacts'
import { connect } from 'react-redux'
import './GroupSectionContainer.scss'
class GroupSectionContainer extends Component {
    render() {
        const list_contacts = this.props.contacts
        const list_contacts_add_group = this.props.groupsSection.list_contacts_add_group
        const filter_contacts = this.props.groupsSection.filter_contacts
        return (
            <div className="group-section-container">
                <HeaderGroupSection list_contacts={list_contacts} list_contacts_add_group={list_contacts_add_group} filter_contacts={filter_contacts} />
                <ListGeneralContactsGroup contacts={list_contacts} list_contacts_add_group={list_contacts_add_group} filter_contacts={filter_contacts} />
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
const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: () => {
            dispatch(fetchGroups())
        },
        fetchContacts: () => {
            dispatch(fetchContacts())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupSectionContainer)