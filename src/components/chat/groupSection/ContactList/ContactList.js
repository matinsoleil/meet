import React, { Component } from 'react';
import { getGroupsSection } from '../../../../redux/selectors/groupsSection';
import { connect } from 'react-redux'
import GeneralContactDataGroup from './GeneralContactDataGroup'
import updateFilterContactsAddGroup from '../../../../redux/actions/groups/updateFilterContactsAddGroup';
import updateListContactsAddGroup from '../../../../redux/actions/groups/updateListContactsAddGroup';
import './ContactList.scss';

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.addContactGroupClick = this.addContactGroupClick.bind(this)
        this.firstTime = 0;
        //this.props.updateFilterContactsAddGroup(this.props.contacts);
    }

    orderByName(listContacts) {
        const byName = listContacts.slice(0)
        return byName.sort(function (a, b) {
            var x = a.name.toLowerCase()
            var y = b.name.toLowerCase()
            return x < y ? -1 : x > y ? 1 : 0
        })
    }

    addContactGroupClick(idContact) {
        var listContacts = this.props.contacts
        var filter_contacts = this.props.filter_contacts
        var listAddContactsGroup = this.props.list_contacts_add_group
        var clearUser = 0
        for (var i = 0 ; i < listAddContactsGroup.length ; i++) {
            if (listAddContactsGroup[i].id === idContact) {
                listAddContactsGroup.splice(i, 1)
                clearUser = 1
                break
            } else {
                console.log('not equal')
            }
        }
        if (clearUser === 0) {
            var infoContact = listContacts.find(item => item.id === idContact)
            var newContact = {
                id: infoContact.id,
                name: infoContact.name,
                imgContact: infoContact.imgContact,
                onEdit : '1'
            }
            listAddContactsGroup.push(newContact)
        }
        if (filter_contacts.length !== 0) {
            this.props.updateFilterContactsAddGroup(filter_contacts)
        }
        this.props.updateListContactsAddGroup(listAddContactsGroup)
    }

    deleteContactGroupClick(idContact) {
        var listAddContactsGroup = this.props.list_contacts_add_group
        for (var i = 0 ; i < listAddContactsGroup.length ; i++) {
             console.log('delete')
        }
    }

    filterOnlyContacts(listContacts) {
        return listContacts.filter(function (contact) {
            return contact.typeChat === "1"
        })
    }

    render() {
        var indexAlphabet = ''
        var flagAlphabet = ''
        const filter_contacts = this.props.groupsSection.filter_contacts;
        let contacts = [];
        if (filter_contacts.length === 0) { contacts = this.orderByName(this.filterOnlyContacts(this.props.contacts));  } else { contacts = this.orderByName(this.filterOnlyContacts(filter_contacts)) }
        return (
            <div id='list-contact-group' className="main-chat-general-list-contact-group">
                <div className="main-chat-general-list-contact-group-title"></div>
                {
                    contacts.map(contact => {
                        if (indexAlphabet.includes(contact.name.charAt(0)) === false) {
                            indexAlphabet = contact.name.charAt(0)
                            flagAlphabet = contact.name.charAt(0)
                            
                        } else {
                            flagAlphabet = ""
                        }
                        return <GeneralContactDataGroup className="contact-group" 
                                                        groupsSection={this.props.groupsSection} 
                                                        key={contact.id} 
                                                        contact={contact} 
                                                        onClick={this.addContactGroupClick} 
                                                        flagAlphabet={flagAlphabet} />
                    })
                }
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateListContactsAddGroup: (listContacts) => {
            //Change!!
            dispatch(updateListContactsAddGroup(listContacts))
        },
        updateFilterContactsAddGroup: (listContacts) => {
            dispatch(updateFilterContactsAddGroup(listContacts))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        groupsSection: getGroupsSection(state)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);