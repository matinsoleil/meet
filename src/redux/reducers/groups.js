const estado = {
    id: null,
    contacts: [],
    filter_contacts: [],
    view: false
}
export const groups = (state = estado, action) => {

    switch (action.type) {
        case 'FETCH_GROUPS':
            return {
                ...state,
                id: null,
                contacts: [],
                filter_contacts: [],
                view: false
            }
        case 'SHOW_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                contacts: action.payload,
                select_contacts: [
                    {
                        "id": "1",
                        "name": "ZAPATA",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "05/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp"
                    },
                    {
                        "id": "2",
                        "name": "GILSELA",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "06/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VYC6NgcgkwxTojYdGgUb6vHSFGkJEmuPkStVsMerPyxnnK1Vfg"
                    },
                    {
                        "id": "3",
                        "name": "JAVO",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "07/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtcMa1tiLUbwXqTMfxr0FoUKZcHFhu2wInV9MTEzZbfm1eAzXWQ"
                    },
                ],
                filter_contacts: [],
                view: true
            }
        case 'HIDE_SECTION_GROUPS':
            return {
                ...state,
                id: null,
                contacts: [],
                filter_contacts: [],
                select_contacts: [],
                view: false
            }
        default:
            return state
    }
}