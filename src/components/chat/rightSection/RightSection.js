import React, { Component } from 'react';
import { connect } from 'react-redux';
//import GroupSectionContainer from '../../../components/chat/groupSection/GroupSectionContainer'
import './RightSection.scss'
import HeaderGroupSection from '../groupSection/HeaderGroupSection';
import ListGeneralContactsGroup from '../groupSection/ListGeneralContactsGroup';
import HeaderHolder from './headerHolder/HeaderHolder';

class RightSection extends Component {
    render() {
        return (
            <div className="right-section-container">
                <div className="group-section-container">
                    <HeaderHolder>
                        <HeaderGroupSection
                            list_contacts={this.props.contacts}
                            list_contacts_add_group={this.props.groupsSection.list_contacts_add_group}
                            filter_contacts={this.props.groupsSection.filter_contacts}
                        />
                    </HeaderHolder>
                    <ListGeneralContactsGroup
                        contacts={this.props.contacts}
                        list_contacts_add_group={this.props.groupsSection.list_contacts_add_group}
                        filter_contacts={this.props.groupsSection.filter_contacts}
                    />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    groupsSection: state.groupsSection,
    contacts: state.contacts,
}))(RightSection);