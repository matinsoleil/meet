import React, { Component } from 'react';
import './ContactAddGroup.scss'
const tesContactTwo = [
    {
        "id": "9",
        "name": "ANTONIO TWO",
        "photo": "ruta",
        "status": "Status test",
        "label": "label",
        "dayLastMessage": "08/09/2018",
        "lastMessage": "Last Message",
        "countMessage": "2",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH"
    }, {
        "id": "4",
        "name": "ANTONIO",
        "photo": "ruta",
        "status": "Status test",
        "label": "label",
        "dayLastMessage": "08/09/2018",
        "lastMessage": "Last Message",
        "countMessage": "2",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AMknsVJTTstO5ex2h7DdYmiA-rmqzmXcsRwDm7nCc-mbQgv3"
    }
]

class ContactAddGroup extends Component {
    constructor(...props) {
        super(...props);
        this.deleteClick = this.deleteClick.bind(this);
        this.addClick = this.addClick.bind(this);
    }
    deleteClick() {
        const resultado = tesContactTwo.find( tesContact => tesContact.id == this.props.contact.id );
        var index = tesContactTwo.findIndex(item => item.id === resultado.id)
        tesContactTwo.splice(index, 1)
        console.log(tesContactTwo);
    }
    addClick() {
        tesContactTwo.push(
            {
                "id": "7",
                "name": "CESAR",
                "photo": "ruta",
                "status": "Status test",
                "label": "label",
                "dayLastMessage": "06/09/2018",
                "lastMessage": "Last Message",
                "countMessage": "2",
                "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMybaKtUQwGjyL2fXA7ZNY7J_vM_LSi3ToZnJ6aa6viL9FUDEf"
            }
        );
        console.log(tesContactTwo);
    }
    render() {
        return (
            <div>
                <div className="contact-add-group"  >
                    <div className="grid-container-contact-add-group">
                        <div className="icon-contact-add-group">
                            <div className="outer-circle-contact-add-group" >
                                <img className="img-icon-contact-add-group" src={this.props.contact.imgContact} alt="test" />
                            </div>
                        </div>
                        <div className="name-contact-add-group">{this.props.contact.name}
                            <div className="circle-count-message-contact-add-group" onClick={this.addClick}>
                                <p>+</p>
                            </div>
                        </div>
                        <div className="count-message-contact-add-group" onClick={this.deleteClick}>
                            <div className="circle-count-message-contact-add-group">
                                <p>X</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactAddGroup;