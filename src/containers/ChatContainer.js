import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import GeneralDataUser from '../components/chat/GeneralDataUser'
import { connect } from 'react-redux'
import ActionsContactConversation from '../components/chat/ActionsContactConversation'
import ListGeneralContacts from '../components/chat/ListGeneralContacts'
import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact'
import AreaSendMessage from '../components/chat/AreaSendMessage'
// import fetchContacts from './../actions/contacts/fetchContacts'



const contacts = [
    {
        "id": "1",
        "name": "TEST CONTACT 1 ",
        "photo": "ruta",
        "dayLastMessage": "05/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    }, {
        "id": "2",
        "name": "TEST CONTACT 2",
        "photo": "ruta",
        "dayLastMessage": "05/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    }
];

class ChatContainer extends Component {

    componentDidMount() {
        
        //const res = fetchContacts();
        console.log("revisio");
        //console.log(res);
    }

    renderBody = () => {
        return (
            <div >
                <div className="main-chat-header">
                    <GeneralDataUser />
                    <ActionsContactConversation />
                </div>
                <div className="main-chat-body">
                    <ListGeneralContacts contacts={contacts} />
                    <div className="main-chat-general-conversation-contact">
                        <ChatGeneralConversationContact />
                        <AreaSendMessage />
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <AppFrame
                    header=''
                    body={this.renderBody()}
                    footer=''
                >
                </AppFrame>
            </div>
        );
    }
}


ChatContainer.defaultProps = {
    contacts: []
}



const mapStateToProps = state => ({
    //customers: getCustomers(state)
})


export default connect(mapStateToProps, null)(ChatContainer);