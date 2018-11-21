const estado = {
    list_contacts_add_group: [],
    select_contacts: [],
    filter_contacts: [],
}
export const groupsSection = (state = estado, action) => {
    switch (action.type) {
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                list_contacts_add_group: [],
                filter_contacts: [],
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
        default:
            return state
    }
}