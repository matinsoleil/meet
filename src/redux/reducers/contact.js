const estado = {
    id: null,
    name: null,
    photo: null,
    dayLastMessage: null,
    lastMessage: null,
    imgContact: null,
    chatGroups:[],
    lastState: null,
    onEdit: null
    
}
export const contact = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_CONTACT':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
