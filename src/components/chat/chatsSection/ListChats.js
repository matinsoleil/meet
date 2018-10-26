import React, { Component } from 'react'
import GeneralChatData from './GeneralChatData'
import './ListChats.scss'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
        this.deleteElementChat = this.deleteElementChat.bind(this)
        this.state = {
            showModalFixContact: false
        }
    }

    deleteElementChat = (id) => {
        var listContacts = this.props.listChats
        var idContact = id
        var indexContact = listContacts.findIndex(item => item.id === idContact)
        listContacts.splice(indexContact, 1)
        console.log(listContacts);
    }

    render() {
        const listContactsOrder = this.props.listChats;
        return (
            <div className="main-chat-general-list-contact" >
                {listContactsOrder.map(chat =>
                    <GeneralChatData chat={chat} key={chat.id} clickChat={this.clickChat} deleteElementChat={this.deleteElementChat} />
                )}
            </div>
        )
    }
}


export default ListGeneralContacts;