const estado = {
    list_contacts: [],
    list_contacts_add_group: [],
    filter_contacts: [],
}
export const groupsSection = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {
                ...state,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
            }
        case 'SHOW_SECTION_GROUPS':
            return {
                ...state,
                list_contacts: action.payload,
                list_contacts_add_group: [],
                select_contacts: [],
                filter_contacts: [],
            }
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
                select_contacts: [],
            }
        case 'UPDATE_LIST_CONTACTS_GROUP':
            return {
                ...state,
                list_contacts: action.payload,
            }
        case 'UPDATE_LIST_CONTACTS_ADD_GROUP':
            return {
                ...state,
                list_contacts_add_group: action.payload,
            }
        case 'UPDATE_FILTER_CONTACTS_ADD_GROUP':
            return {
                ...state,
                filter_contacts: action.payload,
            }
        case 'ADD_GROUP':
            const createGroup = state.groups
            createGroup.push(action.payload);
            return {
                ...state,
                list_contacts: [],
                list_contacts_add_group: [],
                filter_contacts: [],
                select_contacts: [],
            }
        default:
            return state
    }
}