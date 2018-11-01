const estado = {
    filter_contacts: null,
}
export const rightSectionContainer = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_RIGHT_SECTION_CONTAINER':
            return {
                ...state,
            }
        case 'UPDATE_FILTER_CONTACT_RIGHT_SECTION_CONTAINER':
            return {
                filter_contacts: action.payload,
            }
        case 'RIGHT_SECTION_CONTAINER_UPDATE_FILTER_CONTACTS':
            return {
                ...state,
            }
        default:
            return state
    }
}