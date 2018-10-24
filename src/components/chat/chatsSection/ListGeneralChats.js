import React, { Component } from 'react'
import GeneralContactData from './GeneralContactData'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
import './ListGeneralChats.scss'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
        this.selectContacClick = this.selectContacClick.bind(this);
    }

    selectContacClick(idContact) {
        this.props.fetchContact(idContact);
    }

    render() {
        const listContactsOrder = this.props.listChats;
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