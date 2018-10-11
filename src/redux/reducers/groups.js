const estado = {
    id: null,
    contacts: [],
    filter_contacts: [],
    view: false
}
export const groups = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {
                ...state,
                id: null,
                contacts: [],
                filter_contacts: [],
                view: false
            }
        case 'SHOW_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                contacts: action.payload,
                select_contacts: [],
                filter_contacts: [],
                view: true
            }
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                contacts: [],
                filter_contacts: [],
                select_contacts: [],
                view: false
            }
        default:
            return state
    }
}