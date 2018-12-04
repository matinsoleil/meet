import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actionstypes';

const defaultState = {
    id: 1,
    idUser: 1,
    name: "Viejo Lesbiano",
    label: "label contact 69",
    lastMessageDate: 1543447426077,//"dayLastMessage": "8 min",
    lastMessage: "Hello, how are you?",//"lastMessage": "Last Message",
    unreadMessages: { status: true, messages: null },//"countMessage": "1",
    mutted: false,//"silence": "0",
    file: false,//"file": "0",
    pinned: true,//"pinner": "0",
    members: [{id: 1, name:"User 1"}, {id: 2, name:"User 2"}],//"contactsIds": null,
    //image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzKrqK-LRQQs35JauQ9mlYG-ZFvH773TRbWcWpjyQ0HKTKznH",
    type: "basic",
    stored: true,
};

const actionHandlersMap = new Map([
    // [ConversationActionTypes.SET_CONVERSATION, (state, action) => ({ ...state, ...action.payload })],
    [
        ActionTypes.ADD_CONVERSATION, (state, action) => { return action.payload.conversation }
    ],
    [
        ActionTypes.FETCH_CONVERSATION_ADD,
        (state, action) => {
            for (let index in state) {
                if (state[index].id === action.payload.conversationId) {
                    state[index].conversation = [...state[index].conversation, action.payload.message];
                    return [...state];
                }
            }
        },
    ],
    [
        ActionTypes.DELETE_CONVERSATION,
        (state, action) => [...action.payload]
    ],
]);

export const conversationReducer = handleActions(actionHandlersMap, defaultState);
