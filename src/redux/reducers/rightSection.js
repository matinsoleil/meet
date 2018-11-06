const estado = {
    show: false,
    showSectionSpecific: null
}
export const rightSection = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_RIGHT_SECTION':
            return {
                ...state,
            }
        case 'UPDATE_FILTER_CONTACT_RIGHT_SECTION':
            return {
                filter_contacts: action.payload,
            }
        case 'RIGHT_SECTION_UPDATE_FILTER_CONTACTS':
            return {
                ...state,
            }

        case 'SHOW_SECTION_RIGHT':
            return {
                ...state,
                show: true,
                showSectionSpecific: action.payload
            }

        default:
            return state
    }
}