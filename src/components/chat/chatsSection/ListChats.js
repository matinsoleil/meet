import React, { Component } from 'react'
import GeneralChatData from './GeneralChatData'
import './ListChats.scss'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalFixContact: false,
        }
    }
    render() {
        return (
            <div className="main-chat-general-list-contact" >
                {this.props.listChats.map(chat =>
                    <GeneralChatData chat={chat}
                        key={chat.id+'-'+Math.random()}
                    />
                )}
            </div>
        )
    }
}

export default ListGeneralContacts;