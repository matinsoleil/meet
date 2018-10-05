import { SEARCH_CONTACTS } from '../../actionstypes'
const searchContactsList = [
    {
        "id": "22",
        "name": "test Contact 22",
        "photo": "ruta",
        "dayLastMessage": "3 min",
        "lastMessage": "Last Message",
        "countMessage": "24",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
    },
    {
        "id": "26",
        "name": "test Contact 26",
        "photo": "ruta",
        "dayLastMessage": "3 min",
        "lastMessage": "Last Message",
        "countMessage": "3",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4gRO_bIr2YLXI4-0_NmlZQw55vKYXLCppLfMtq10bmZ-TsiD"
    },
    {
        "id": "28",
        "name": "test Contact 28",
        "photo": "ruta",
        "dayLastMessage": "3 min",
        "lastMessage": "Last Message",
        "countMessage": "8",
        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMybaKtUQwGjyL2fXA7ZNY7J_vM_LSi3ToZnJ6aa6viL9FUDEf"
    }
];
export const searchContacts = (id) => dispatch => {
    console.log(" * * * * ");
 
    dispatch({
        type: SEARCH_CONTACTS,
        searchContacts: searchContactsList,
    })
}
export default searchContacts;
