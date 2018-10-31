const estado = {
    list_contacts: null,
    filter_contacts: null,
    view: false,
}
export const rightSectionContainer = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_RIGHT_SECTION_CONTAINER':
        
            return {
                ...state,
                view: false
            }
        case 'SHOW_SECTION_RIGHT_SECTION_CONTAINER':
            return {
                ...state,
                id: null,
                list_contacts: action.payload,
                filter_contacts: [],
                view: true
            }
        case 'HIDE_SECTION_RIGHT_SECTION_CONTAINER':
            return {
                ...state,
                id: null,
                list_contacts: [],
                
                filter_contacts: [],
                view: false
            }
        case 'UPDATE_LIST_CONTACTS':
            return {
                ...state,
                list_contacts: action.payload,
                view: true
            }
        case 'UPDATE_FILTER_CONTACTS':
            return {
                ...state,
                filter_contacts: action.payload,
                view: true
            }
        default:
            return state
    }
}