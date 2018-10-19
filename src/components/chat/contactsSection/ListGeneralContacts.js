import React, { Component } from 'react'
import GeneralContactData from './GeneralContactData'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
import './ListGeneralContacts.scss'
class ListGeneralContacts extends Component {
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
            <div>
                <div className="main-chat-general-list-contact">
                    {listContactsOrderByName.map(contact =>
                        <GeneralContactData contact={contact} onClick={this.handleClick} key={contact.id} />
                    )}
                </div>
                <div className="message-popup ">
                    <p className="text-message-popup">
                        <span className="msg"> stylopm </span>
                    </p>
                </div>
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