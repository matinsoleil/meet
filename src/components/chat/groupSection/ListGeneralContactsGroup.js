import React, { Component } from 'react'
import GeneralContactDataGroup from './GeneralContactDataGroup'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
import './ListGeneralContactsGroup.scss'
class ListGeneralContactsGroup extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(idContact) {
        this.props.fetchContact(idContact);
    }
    orderByName(listContacts) {
        const byName = listContacts.slice(0);
        return byName.sort(function (a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }
    render() {
        const listContactsOrderByName = this.orderByName(this.props.contacts);
        return (
            <div className="main-chat-general-list-contact-group">
                <div className="main-chat-general-list-contact-group-title">
                    Contactos
                </div>
                {listContactsOrderByName.map(contact =>
                    <GeneralContactDataGroup
key={contact.id} contact={contact} onClick={this.handleClick} />
                )}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchContact: (id) => {
            dispatch(fetchContact(id));
        },
    }
}
export default connect(null, mapDispatchToProps)(ListGeneralContactsGroup);