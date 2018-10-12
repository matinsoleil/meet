const estado = {
    id: null,
    contacts: null,
    filter_contacts: null,
    view: false
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
                view: false
            }
        case 'SHOW_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: action.payload,
                list_contacts_add_group:[], 
                select_contacts: [],
                filter_contacts: [],
                view: true
            }
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                list_contacts: null,
                list_contacts_add_group: null,
                filter_contacts: null,
                select_contacts: null,
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
        default:
            return state
    }
}