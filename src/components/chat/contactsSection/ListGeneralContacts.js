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
    render() {
        return (
            <div className="main-chat-general-list-contact">
                {this.props.contacts.map(contact =>
                    <GeneralContactData contact={contact} onClick={this.handleClick} key={contact.id} />
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