import { SEARCH_CONTACTS } from '../actionstypes';
const estado = {
    searchContacts: []
}
export const searchContacts = (state = estado, action) => {
    switch (action.type) {
        case 'SEARCH_CONTACTS':
            return {
                ...state,
                searchContacts: action.searchContacts,
            }
        default:
            return state
    }
}
