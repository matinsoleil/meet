import React, { Component } from 'react'
import { getContacts } from '../../../redux/selectors/contacts'
import searchContacts from '../../../redux/actions/contacts/searchContacts'
import ContactAddGroup from './ContactAddGroup'
import { connect } from 'react-redux'
import './HeaderGroupSection.scss'

const tesContact = [
    {
        "id": "9",
        "name": "ANTONIO",
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
    }, {
        "id": "7",
        "name": "CESAR",
        "photo": "ruta",
        "status": "Status test",
        "label": "label",
        "dayLastMessage": "06/09/2018",
        "lastMessage": "Last Message",
        "countMessage": "2",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMybaKtUQwGjyL2fXA7ZNY7J_vM_LSi3ToZnJ6aa6viL9FUDEf"
    }, {
        "id": "8",
        "name": "AMILCAR",
        "photo": "ruta",
        "status": "Status test",
        "label": "label",
        "dayLastMessage": "07/09/2018",
        "lastMessage": "Last Message",
        "countMessage": "2",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e-0MFbXTwq4C_tb8NoWvmiTOyigeoBMDqd7uXhwcAjXDViN-"
    }, {
        "id": "9",
        "name": "ANTONIO",
        "photo": "ruta",
        "status": "Status test",
        "label": "label",
        "dayLastMessage": "08/09/2018",
        "lastMessage": "Last Message",
        "countMessage": "2",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH"
    }
]

// const tesContact = [
//     {
//         "id": "9",
//         "name": "ANTONIO",
//         "photo": "ruta",
//         "status": "Status test",
//         "label": "label",
//         "dayLastMessage": "08/09/2018",
//         "lastMessage": "Last Message",
//         "countMessage": "2",
//         "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH"
//     }
// ]
// const tesContact = [];
class HeaderGroupSection extends Component {
    filterList = contacts => event => {
        const val = event.target.value.toLowerCase();
        const listContactsFecth = this.props.contacts.filter(v => v.name.toLowerCase().includes(val));
        this.props.searchContacts(listContactsFecth);
    };
    render() {
        return (
            <div className="main-header-group-section">
                <div className="grid-container-header-section">
                    <div className="header-group">
                        Nuevo grupo
                        <div>
                            {tesContact.map(contact =>
                                <ContactAddGroup key={contact.id} contact={contact} onClick={this.handleClick} />
                            )
                            }
                        </div>
                    </div>
                    <div className="search-contact">
                        <input type="text" className="input-search" placeholder="Buscar" onChange={this.filterList(this.props.user.contacts)}></input>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchContacts: (listContactsFecth) => {
            dispatch(searchContacts(listContactsFecth));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupSection);