import React, { Component } from 'react';
import HeaderGroupSection from './ContactListHeader/contactListHeader';
import ContactList from './ContactList/ContactList';
import SelectedContacts from './selectedContacts/selectedContacts';
import { getGroupsSection } from '../../../../redux/selectors/groupsSection';
import { getContacts } from '../../../../redux/selectors/contacts';
import { connect } from 'react-redux';
import './supportContactList.scss';

class SupportContactList extends Component {
    render() {
        return (
            <div className="support-section-container">
                <HeaderGroupSection
                    title={this.props.title}/>
                <ContactList/>
                <SelectedContacts
                    action={this.props.action} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groupsSection: getGroupsSection(state),
        contacts: getContacts(state)
    }
};

export default connect(mapStateToProps)(SupportContactList);