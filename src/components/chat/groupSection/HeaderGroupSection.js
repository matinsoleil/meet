import React, { Component } from 'react'
import { getContacts } from '../../../redux/selectors/contacts'
import searchContacts from '../../../redux/actions/contacts/searchContacts'
import ContactAddGroup from './ContactAddGroup'
import { connect } from 'react-redux'
import './HeaderGroupSection.scss'

const tesContact = [
    {
      "id": "1",
      "name": "ZAPATA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "05/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp"
    },
    {
      "id": "2",
      "name": "GILSELA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "06/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
      "id": "3",
      "name": "JAVO",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "07/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtcMa1tiLUbwXqTMfxr0FoUKZcHFhu2wInV9MTEzZbfm1eAzXWQ"
    },
    {
      "id": "4",
      "name": "ANTONIO",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "08/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AMknsVJTTstO5ex2h7DdYmiA-rmqzmXcsRwDm7nCc-mbQgv3"
    },
    {
      "id": "5",
      "name": "ROSA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "09/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrremDO1rZJn57FqEVQqS-HZSFBef6Uok3yesoyqgNUEgRU7-tQ"
    },
    {
      "id": "6",
      "name": "IRVING",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "05/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4gRO_bIr2YLXI4-0_NmlZQw55vKYXLCppLfMtq10bmZ-TsiD"
    },
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
    },
    {
      "id": "8",
      "name": "AMILCAR",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "07/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e-0MFbXTwq4C_tb8NoWvmiTOyigeoBMDqd7uXhwcAjXDViN-"
    },
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
    },
    {
      "id": "10",
      "name": "FERNANDA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "09/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3qmREi6Bag9BxxTvSCdXKqL8G2mBNjSFMi1nBZ1r92jNniSwnw"
    },
    {
      "id": "11",
      "name": "MARIA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "05/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAUelg7yg0mepGMf-N93hh6E9XrLnKwsKa4YEQ6swhDknk4F9eQ"
    },
    {
      "id": "12",
      "name": "TERESA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "06/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBlwiKYPWMTt6ROM1-piJUzikE0EaNzi_LnnUGrIYh-aefUqB"
    },
    {
      "id": "13",
      "name": "JUANA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "07/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvMsmKCKx17K2ECuG7LoUmEiviXKwqIccgrm9naAQKnku0G2yMQ"
    },
    {
      "id": "14",
      "name": "TANIA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "08/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvMsmKCKx17K2ECuG7LoUmEiviXKwqIccgrm9naAQKnku0G2yMQ"
    },
    {
      "id": "15",
      "name": "MARGARITA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "09/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-bUtMrovoWkw733UD5sQCF6aaw5VCug-B8Wi3CCvAtaBpS8JMA"
    },
    {
      "id": "16",
      "name": "ELVIA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "05/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFjQ9clTxmrIS87TaIYrymyvb3lVBa8yUaQ8ioHqFccj9pCWX"
    },
    {
      "id": "17",
      "name": "YURIDIA",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "06/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCDTJFjmSOib_a-T764n2AYQRIX-nMO3yMoF1K4EHrQyVTxsz"
    },
    {
      "id": "18",
      "name": "TEST CONTACT 18 TEST CONTACT 18",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "07/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ByyxctCPUvbgtE3yRiAbOLws_steoWeLybXvzUZvXDylO8ZU"
    },
    {
      "id": "19",
      "name": "TEST CONTACT 19",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "08/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviwffByEVaqIZir9WNZ7CHnHC6q_AklKybQQlrZMHBCVCcTPSHg"
    },
    {
      "id": "20",
      "name": "TEST CONTACT 20",
      "photo": "ruta",
      "status": "Status test",
      "label": "label",
      "dayLastMessage": "09/09/2018",
      "lastMessage": "Last Message",
      "countMessage": "2",
      "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwww3bn_7VHZz_ZHgyDSLsg9ukZpGikjEifw2CIPZt1zqflcK5"
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