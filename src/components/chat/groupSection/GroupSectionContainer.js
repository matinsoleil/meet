import HeaderGroupSection from './HeaderGroupSection'
import ListGeneralContactsGroup from './ListGeneralContactsGroup'
import React, { Component } from 'react'
import './GroupSectionContainer.scss'
class GroupSectionContainer extends Component {
    render() {
        return (
            <div className="group-section-container">
                <HeaderGroupSection user={null} contacts={this.props.groups.contacts} select_contacts={this.props.groups.select_contacts} />
                <ListGeneralContactsGroup contacts={this.props.groups.contacts} />
            </div>
        );
    }
}
export default GroupSectionContainer;