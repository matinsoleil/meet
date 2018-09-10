import React, { Component } from 'react'
import AppFrame from '../components/AppFrame'
import GeneralDataUser from '../components/chat/GeneralDataUser'
import { connect } from 'react-redux'
import ActionsContactConversation from '../components/chat/ActionsContactConversation'
import ListGeneralContacts from '../components/chat/ListGeneralContacts'
import ChatGeneralConversationContact from '../components/chat/ChatGeneralConversationContact'
import AreaSendMessage from '../components/chat/AreaSendMessage'
import fetchContacts from './../actions/contacts/fetchContacts'

const user = [
    {
        "id": "1",
        "name": "TEST USER CLARO CONNECT ",
        "photo": "ruta",
        "dayLastMessage": "05/09/2018",
        "lastMessage": "Last Message",
        "imgUser": "https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png"
    }
]
const contacts = [
    {
        "id": "1",
        "name": "TEST CONTACT 1 ",
        "photo": "ruta",
        "dayLastMessage": "05/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp"
    },
    {
        "id": "2",
        "name": "TEST CONTACT 2",
        "photo": "ruta",
        "dayLastMessage": "06/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "3",
        "name": "TEST CONTACT 3",
        "photo": "ruta",
        "dayLastMessage": "07/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "4",
        "name": "TEST CONTACT 4",
        "photo": "ruta",
        "dayLastMessage": "08/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "5",
        "name": "TEST CONTACT 5",
        "photo": "ruta",
        "dayLastMessage": "09/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "6",
        "name": "TEST CONTACT 6 ",
        "photo": "ruta",
        "dayLastMessage": "05/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "7",
        "name": "TEST CONTACT 7",
        "photo": "ruta",
        "dayLastMessage": "06/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "8",
        "name": "TEST CONTACT 8",
        "photo": "ruta",
        "dayLastMessage": "07/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "9",
        "name": "TEST CONTACT 9",
        "photo": "ruta",
        "dayLastMessage": "08/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "10",
        "name": "TEST CONTACT 10",
        "photo": "ruta",
        "dayLastMessage": "09/09/2018",
        "lastMessage": "Last Message",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    }
];
const contactConnect = [{
    "id": "1",
    "name": "TEST CONTACT 1 ",
    "photo": "ruta",
    "dayLastMessage": "05/09/2018",
    "lastMessage": "Last Message",
    "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp"
}]
const conversationOfContact = [{
    "id": "1",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "status": "1"
},
{
    "id": "2",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "status": "1"
},
{
    "id": "3",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "status": "1"
},
{
    "id": "4",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "status": "1"
},
{
    "id": "5",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "status": "1"
},
{
    "id": "6",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "status": "1"
},
{
    "id": "7",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "status": "1"
},
{
    "id": "8",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "status": "1"
},
{
    "id": "9",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "status": "1"
},
{
    "id": "10",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "status": "1"
},
{
    "id": "11",
    "userSend": "1",
    "userGet": "2",
    "message": "message",
    "status": "1"
},
{
    "id": "12",
    "userSend": "2",
    "userGet": "1",
    "message": "message",
    "status": "1"
}]

class ChatContainer extends Component {

    renderBody = () => {
        return (
            <div >
                <div className="main-chat-header">
                    <GeneralDataUser imgUser={user[0].imgUser} />
                    <ActionsContactConversation  imgContact={contactConnect[0].imgContact} nameContact={contactConnect[0].name} />
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