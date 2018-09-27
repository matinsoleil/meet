const estado = {
    id: "",
    name: "",
    photo: "",
    dayLastMessage: "",
    lastMessage: "",
    imgContact: ""
}
export const contact = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_CONTACT':
            return {
                ...state,
                id: action.id,
                name: action.name,
                photo: action.photo,
                dayLastMessage: action.dayLastMessage,
                lastMessage: action.lastMessage,
                imgContact: action.imgContact,
            }
        default:
            return state
    }
}
