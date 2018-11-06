import React, { Component } from 'react'
import GeneralContactDataGroup from './GeneralContactDataGroup'
import updateListContactsGroup from '../../../redux/actions/groups/updateListContactsGroup'
import updateListContactsAddGroup from '../../../redux/actions/groups/updateListContactsAddGroup'
import updateFilterContactsAddGroup from '../../../redux/actions/groups/updateFilterContactsAddGroup'
import fetchGroups from '../../../redux/actions/groups/fetchGroups'
import { getGroups } from '../../../redux/selectors/groups'
import { connect } from 'react-redux'
import './ListGeneralContactsGroup.scss'
class ListGeneralContactsGroup extends Component {
    constructor(props) {
        super(props);
        this.addContactGroupClick = this.addContactGroupClick.bind(this)
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
        var listContacts = this.props.contacts;
        var filter_contacts = this.props.filter_contacts;
        var listAddContactsGroup = this.props.list_contacts_add_group;
        var clearUser = 0;
        for (var i = 0; i < listAddContactsGroup.length; i++) {
            if (listAddContactsGroup[i].id === idContact) {
                listAddContactsGroup.splice(i, 1);
                clearUser = 1;
                break;
            } else {
                console.log('not equal');
            }

        }
        if (clearUser === 0) {
            var infoContact = listContacts.find(item => item.id === idContact)
            var newContact = {
                id: infoContact.id,
                name: infoContact.name,
                imgContact: infoContact.imgContact
            }
            listAddContactsGroup.push(newContact)
        }

        if (filter_contacts.length !== 0) {
            var listAddContactsGroupFilter = filter_contacts
            var indexContactFilter = listAddContactsGroupFilter.findIndex(item => item.id === idContact)
            filter_contacts.splice(indexContactFilter, 1)
            this.props.updateFilterContactsAddGroup(filter_contacts)
        }
        this.props.updateListContactsAddGroup(listAddContactsGroup)
    }

    deleteContactGroupClick(idContact) {

        var listAddContactsGroup = this.props.list_contacts_add_group;
        for (var i = 0; i < listAddContactsGroup.length; i++) {

           console.log(listAddContactsGroup[i].id);  
          }

    }

    filterOnlyContacts(listContacts) {
        return listContacts.filter(function (contact) {
            return contact.typeChat === "1";
        })
    }

    render() {
        // const listContactsOrderByName = this.orderByName((this.props.filter_contacts.length === 0 ? this.props.contacts : this.props.filter_contacts))
        const result = this.filterOnlyContacts(this.props.contacts)
        const listContacts = this.orderByName(result)
        var indexAlphabet = ''
        var flagAlphabet = ''
        return (
            <div className="main-chat-general-list-contact-group">
                <div className="main-chat-general-list-contact-group-title"></div>
                {
                    listContacts.map(contact => {
                        if (indexAlphabet.includes(contact.name.charAt(0)) === false) {
                            indexAlphabet = contact.name.charAt(0)
                            flagAlphabet = contact.name.charAt(0)
                        } else {
                            flagAlphabet = ""
                        }
                        return <GeneralContactDataGroup className="contact-group" groups={this.props.groups} key={contact.id} contact={contact} onClick={this.addContactGroupClick} flagAlphabet={flagAlphabet} />
                    })
                }
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateListContactsGroup: (listContacts) => {
            dispatch(updateListContactsGroup(listContacts))
        },
        updateListContactsAddGroup: (listContacts) => {
            dispatch(updateListContactsAddGroup(listContacts))
        },
        updateFilterContactsAddGroup: (listContacts) => {
            dispatch(updateFilterContactsAddGroup(listContacts))
        },
        fetchGroups: () => {
            dispatch(fetchGroups())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        groups: getGroups(state)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListGeneralContactsGroup)