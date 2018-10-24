import React, { Component } from 'react'
import GeneralChatData from './GeneralChatData'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
import './ListChats.scss'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
        this.selectChat = this.selectChat.bind(this);
    }

    selectChat(idContact) {
        this.props.fetchContact(idContact);
    }

    render() {
        const listContactsOrder = this.props.listChats;
        return (
            <div className="main-chat-general-list-contact">
                {listContactsOrder.map(chat =>
                    <GeneralChatData chat={chat} onClick={this.selectChat} key={chat.id} />
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