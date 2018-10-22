import React, { Component } from 'react'
import GeneralContactData from './GeneralContactData'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
import './ListGeneralContacts.scss'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
        this.selectContacClick = this.selectContacClick.bind(this);
        // this.estado = this.estado.bind(this);
    }
    selectContacClick(idContact) {
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


    orderByPinner(listContacts) {
        const byPinner = listContacts.slice(0);
        return byPinner.sort(function (a, b) {
            var x = a.pinner.toLowerCase();
            var y = b.pinner.toLowerCase();
            return x > y ? -1 : x < y ? 1 : 0;
        });
    }


    render() {
        const listContactsOrder = this.orderByPinner(this.props.contacts);
        return (
            <div className="main-chat-general-list-contact">
                {listContactsOrder.map(contact =>
                    <GeneralContactData contact={contact} onClick={this.selectContacClick} key={contact.id} />
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
export default connect(null, mapDispatchToProps)(ListGeneralContacts);