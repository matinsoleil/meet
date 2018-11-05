const estado = {
    filter_contacts: null,
}
export const contactSection = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_CONTACT_SECTION':
            return {
                ...state,
            }
        case 'UPDATE_FILTER_CONTACT_SECTION':
            return {
                filter_contacts: action.payload,
            }
        case 'CONTACT_SECTION_UPDATE_FILTER_CONTACTS':
            return {
                ...state,
            }
        default:
            return state
    }
}