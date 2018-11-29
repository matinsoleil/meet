import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actionstypes';

const defaultState = {
    id: 2,
    name: "Viejo Lesbiano",
    label: "label contact 69",
    members: [{ id: 1, name: 'Jose' }, { id: 2, name: 'Juan' }],
    conversation: [],
    type: "basic",
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
    [
        ActionTypes.DELETE_MESSAGE,
        (state, action) => {
            //[...state].filter(message => (message.id === action.payload) ? false : true)
            for (let index in state) {
                if (state[index].id === action.payload.conversationId) {
                    state[index].conversation = state[index].conversation.filter(message => (message.id === action.payload.messageId) ? false : true);
                    return [...state]
                }
            }
        }
    ],
]);

export const conversationReducer = handleActions(actionHandlersMap, defaultState);
