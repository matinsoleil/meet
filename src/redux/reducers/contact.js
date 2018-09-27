const estado = {
    id: null,
    name: null,
    photo: null,
    dayLastMessage: null,
    lastMessage: null,
    imgContact: null
}
export const contact = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_CONTACT':
            return {
                ...state,
                id: action.id,
                name: action.name,
                photo: action.photo,
                status: action.status,
                label: action.label,          
                dayLastMessage: action.dayLastMessage,
                lastMessage: action.lastMessage,
                imgContact: action.imgContact,
            }
        default:
            return state
    }
}
