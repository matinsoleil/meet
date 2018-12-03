import {handleActions} from 'redux-actions';
import {ActionTypes, searchActions} from "../actionstypes";

/**
 *
 * Example of conversation object
 * {
        id: 1,
        name: "Antonio M",
        label: "label contact 69",
        lastMessageDate: "8 min",
        lastMessage: "Hello, how are you?"
        unreadMessages: { status: true, messages: null },
        mutted: false,
        file: false,
        pinned: true,
        members: [],
        //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
        type: "basic", CAN BE: | basic | group |
        stored: true
    }
 *
 *
 */

let mapActions = new Map([
    [
        ActionTypes.CONVERSATIONS_ADD,
        (state, action) => ([action.payload, ...state])
    ],
    [
        ActionTypes.CONVERSATIONS_REMOVE,
        (state, action) => (state.filter(conversation => !action.payload.includes(conversation)))
    ],
    [
        ActionTypes.CONVERSATIONS_UPDATE,
        (state, action) => (state.map(
            conversation => action.payload.filter(updated => conversation.id === updated.id)[0] || conversation
        ))
    ]
]);

export const conversationsReducer = handleActions(mapActions, [
    {
        id: 1,
        name: "Viejo Lesbiano",
        label: "label contact 69",
        lastMessageDate: 1543447426077,//"dayLastMessage": "8 min",
        lastMessage: "Hello, how are you?",//"lastMessage": "Last Message",
        unreadMessages: { status: true, messages: null },//"countMessage": "1",
        mutted: false,//"silence": "0",
        file: false,//"file": "0",
        pinned: true,//"pinner": "0",
        members: [],//"contactsIds": null,
        //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
        type: "basic",
        stored: true
    },
    {
        id: 2,
        name: "El Chapo",
        label: "label contact 69",
        lastMessageDate: 1543442023520,//"dayLastMessage": "8 min",
        lastMessage: "Hello, how are you?",//"lastMessage": "Last Message",
        unreadMessages: { status: true, messages: 8 },//"countMessage": "1",
        mutted: false,//"silence": "0",
        pinned: false,//"pinner": "0",
        members: [],//"contactsIds": null,
        //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
        type: "basic",
        stored: false,
        banned: false
    },
    {
        id: 3,
        name: "Emma Watson",
        label: "label contact 69",
        lastMessageDate: 1543436983354,//"dayLastMessage": "8 min",
        lastMessage: "Hello, how are you?",//"lastMessage": "Last Message",
        unreadMessages: { status: false, messages: null },//"countMessage": "1",
        mutted: false,//"silence": "0",
        pinned: true,//"pinner": "0",
        members: [],//"contactsIds": null,
        //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
        type: "basic",
        stored: false,
        banned: false
    },
    {
        id: 4,
        name: "El percebe feo",
        label: "label contact 69",
        lastMessageDate: 1543440602612,//"dayLastMessage": "8 min",
        lastMessage: "Roberto: Hello, how are you?",//"lastMessage": "Last Message",
        unreadMessages: { status: false, messages: null },//"countMessage": "1",
        mutted: false,//"silence": "0",
        pinned: false,//"pinner": "0",
        members: [],//"contactsIds": null,
        //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
        type: "group",
        stored: false,
        banned: false
    },
    {
        id: 5,
        name: "La cocina del pirata",
        label: "label contact 69",
        lastMessageDate: 1543436983354,//"dayLastMessage": "8 min",
        lastMessage: "Roberto: Hello, how are you?",//"lastMessage": "Last Message",
        unreadMessages: { status: false, messages: null },//"countMessage": "1",
        mutted: false,//"silence": "0",
        pinned: true,//"pinner": "0",
        members: [],//"contactsIds": null,
        //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
        type: "group",
        stored: false,
        banned: true
    }
]);