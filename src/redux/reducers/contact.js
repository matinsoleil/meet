const estado = {
    id: null,
    name: null,
    photo: null,
    dayLastMessage: null,
    lastMessage: null,
    imgContact: null,
    chatGroups: [],
    lastState: null,
    onEdit: null,
    contactsIds: null

}
export const contact = (state = estado, action) => {
    switch (action.type) {
        case 'CLEAR_CONTACT':
            return {
                ...state,
                "id": null,
                "name": null,
                "photo": null,
                "status": null,
                "label": null,
                "dayLastMessage": null,
                "lastMessage": null,
                "countMessage": null,
                "silence": null,
                "file": null,
                "fix": null,
                "chatGroups": null,
                "imgContact": null,
                "typeChat": null,
                "conversations": null,
                "contactsIds": null
            }
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
                "fix": action.payload.fix,
                "chatGroups": action.payload.chatGroups,
                "imgContact": action.payload.imgContact,
                "typeChat": action.payload.typeChat,
                "conversations": action.payload.conversations,
                "contactsIds": action.payload.contactsIds
            }
        default:
            return state
    }
}
