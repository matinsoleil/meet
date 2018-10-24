const estado = {
    id: null,
    list_contacts: null,
    list_contacts_add_group: null,
    filter_contacts: null,
    view: false,
    groups: [
        {
            "id": "1",
            "name": "Grupo 1",
            "photo": "ruta",
            "status": "Status test",
            "label": "label",
            "dayLastMessage": "Ayer",
            "lastMessage": "Last Message",
            "countMessage": "0",
            "silence": "1",
            "file": "0",
            "pinner": "1",
            "imgContact": "https://imageog.flaticon.com/icons/png/512/27/27825.png"
        },
        {
            "id": "2",
            "name": "Grupo 2",
            "photo": "ruta",
            "status": "Status test",
            "label": "label",
            "dayLastMessage": "3 min",
            "lastMessage": "Last Message",
            "countMessage": "1",
            "silence": "0",
            "file": "0",
            "pinner": "0",
            "imgContact": "https://imageog.flaticon.com/icons/png/512/27/27825.png"
        },
        {
            "id": "3",
            "name": "Grupo 3",
            "photo": "ruta",
            "status": "Status test",
            "label": "label",
            "dayLastMessage": "22 min",
            "lastMessage": "Last Message",
            "countMessage": "2",
            "silence": "3",
            "file": "1",
            "pinner": "1",
            "imgContact": "https://imageog.flaticon.com/icons/png/512/27/27825.png"
        }]

}
export const groups = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
                view: false,
                groups: estado.groups
            }
        case 'SHOW_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: action.payload,
                list_contacts_add_group: [],
                select_contacts: [],
                filter_contacts: [],
                view: true,
                groups: estado.groups
            }
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
                select_contacts: [],
                view: false,
                groups: estado.groups
            }
        case 'UPDATE_LIST_CONTACTS_GROUP':
            return {
                ...state,
                list_contacts: action.payload,
                view: true
            }
        case 'UPDATE_LIST_CONTACTS_ADD_GROUP':
            return {
                ...state,
                list_contacts_add_group: action.payload,
                view: true
            }
        case 'UPDATE_FILTER_CONTACTS_ADD_GROUP':
            return {
                ...state,
                filter_contacts: action.payload,
                view: true
            }

        case 'ADD_GROUP':
            const createGroup = state.groups
            createGroup.push(action.payload);
            return {
                ...state,
                groups: createGroup,
                id: null,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
                select_contacts: [],
                view: false
            }
        default:
            return state
    }
}