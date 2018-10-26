import React, { Component } from 'react'
import GeneralChatData from './GeneralChatData'
import './ListChats.scss'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const listContactsOrder = this.props.listChats;
        return (
            <div className="main-chat-general-list-contact">
                {listContactsOrder.map(chat =>
                    <GeneralChatData chat={chat}  key={chat.id} clickChat={this.clickChat} />
                )}
            </div>
        )
    }
}


export default ListGeneralContacts;