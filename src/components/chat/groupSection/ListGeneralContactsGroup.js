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
    render() {
        return (
            <div className="main-chat-general-list-contact-group">
                {this.props.contacts.map(c =>
                    <GeneralContactDataGroup
                        id={c.id}
                        key={c.id}
                        nameContact={c.name}
                        dayLastMessage={c.dayLastMessage}
                        lastMessage={c.lastMessage}
                        imgContact={c.imgContact}
                        status={c.status}
                        onClick={this.handleClick}
                        countMessage={c.countMessage} >
                    </GeneralContactDataGroup>
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