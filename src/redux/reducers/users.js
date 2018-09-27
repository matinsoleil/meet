const estado = {
    id: null,
    name: null,
    photo: null,
    status: null,
    lastMessage: null,
    label: null,
    dayLastMessage: null,
    imgUser: null
}
export const users = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                id: action.id,
                name: action.name,
                photo: action.photo,
                status: action.status,
                lastMessage: action.lastMessage,
                label: action.label,          
                dayLastMessage: action.dayLastMessage,
                imgUser: action.imgUser,
            }
        default:
            return state
    }
}
