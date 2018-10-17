const estado = {
    id: null,
    list_contacts: null,
    list_contacts_add_group: null,
    filter_contacts: null,
    view: false,
    new_group: null
}
export const groups = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: null,
                list_contacts_add_group: null,
                filter_contacts: null,
                new_group: [],
                view: false
            }
        case 'SHOW_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: action.payload,
                list_contacts_add_group: [],
                select_contacts: [],
                filter_contacts: [],
                new_group: [],
                view: true
            }
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
                select_contacts: [],
                new_group: [],
                view: false
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

        case 'CREATE_GROUP':
            return {
                ...state,
                new_group: action.payload,
                view: false
            }

        default:
            return state
    }
}