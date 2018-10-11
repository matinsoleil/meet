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
                contacts: [
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
                    {
                        "id": "4",
                        "name": "ANTONIO",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "08/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AMknsVJTTstO5ex2h7DdYmiA-rmqzmXcsRwDm7nCc-mbQgv3"
                    },
                    {
                        "id": "5",
                        "name": "ROSA",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "09/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrremDO1rZJn57FqEVQqS-HZSFBef6Uok3yesoyqgNUEgRU7-tQ"
                    },
                    {
                        "id": "6",
                        "name": "IRVING",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "05/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4gRO_bIr2YLXI4-0_NmlZQw55vKYXLCppLfMtq10bmZ-TsiD"
                    },
                    {
                        "id": "7",
                        "name": "CESAR",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "06/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMybaKtUQwGjyL2fXA7ZNY7J_vM_LSi3ToZnJ6aa6viL9FUDEf"
                    },
                    {
                        "id": "8",
                        "name": "AMILCAR",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "07/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e-0MFbXTwq4C_tb8NoWvmiTOyigeoBMDqd7uXhwcAjXDViN-"
                    },
                    {
                        "id": "9",
                        "name": "ANTONIO",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "08/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH"
                    },
                    {
                        "id": "10",
                        "name": "FERNANDA",
                        "photo": "ruta",
                        "status": "Status test",
                        "label": "label",
                        "dayLastMessage": "09/09/2018",
                        "lastMessage": "Last Message",
                        "countMessage": "2",
                        "imgContact": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3qmREi6Bag9BxxTvSCdXKqL8G2mBNjSFMi1nBZ1r92jNniSwnw"
                    }
                ],
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