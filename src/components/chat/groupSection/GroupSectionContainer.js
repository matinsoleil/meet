import HeaderGroupSection from './HeaderGroupSection'
import ListGeneralContactsGroup from './ListGeneralContactsGroup'
import React, { Component } from 'react'
import './GroupSectionContainer.scss'
class GroupSectionContainer extends Component {
    render() {
        return (
            <div className="group-section-container">
               <HeaderGroupSection user={this.props.user} contacts={this.props.contacts} />
                <ListGeneralContactsGroup contacts={this.props.listContact} />
            </div>
        );
    }
}
export default GroupSectionContainer;