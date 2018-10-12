import HeaderGroupSection from './HeaderGroupSection'
import ListGeneralContactsGroup from './ListGeneralContactsGroup'
import React, { Component } from 'react'
import './GroupSectionContainer.scss'
class GroupSectionContainer extends Component {
    render() {
        return (
            <div className="group-section-container">
                <HeaderGroupSection user={null} contacts={this.props.groups.list_contacts} list_contacts_add_group={this.props.groups.list_contacts_add_group} />
                <ListGeneralContactsGroup contacts={this.props.groups.list_contacts} list_contacts_add_group={this.props.groups.list_contacts_add_group}/>
            </div>
        );
    }
}
export default GroupSectionContainer;