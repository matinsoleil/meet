import HeaderGroupSection from './HeaderGroupSection'
import ListGeneralContactsGroup from './ListGeneralContactsGroup'
import React, { Component } from 'react'
import './GroupSectionContainer.scss'
class GroupSectionContainer extends Component {
    render() {
        const list_contacts = this.props.groups.list_contacts;
        const list_contacts_add_group = this.props.groups.list_contacts_add_group;
        return (
            <div className="group-section-container">
                <HeaderGroupSection list_contacts={list_contacts} list_contacts_add_group={list_contacts_add_group} >
                </HeaderGroupSection>
                <ListGeneralContactsGroup contacts={list_contacts} list_contacts_add_group={list_contacts_add_group}>
                </ListGeneralContactsGroup>
            </div>
        );
    }
}
export default GroupSectionContainer;