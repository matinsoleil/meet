const estado = {
    id: null,
    name: null,
    photo: null,
    dayLastMessage: null,
    lastMessage: null,
    imgContact: null,
    chatGroups: [],
    lastState: null,
    onEdit: null

}
export const contact = (state = estado, action) => {
    switch (action.type) {
        case 'FETCH_CONTACT':
            return {
                ...state,
                "id": action.payload.id,
                "name": action.payload.name,
                "photo": action.payload.photo,
                "status": action.payload.status,
                "label": action.payload.label,
                "dayLastMessage": action.payload.dayLastMessage,
                "lastMessage": action.payload.lastMessage,
                "countMessage": action.payload.countMessage,
                "silence": action.payload.silence,
                "file": action.payload.file,
                "pinner": action.payload.pinner,
                "chatGroups": action.payload.chatGroups,
                "imgContact": action.payload.imgContact,
                "typeChat": action.payload.typeChat,
                "conversations": action.payload.conversations,
            }
        default:
            return state
    }
}
