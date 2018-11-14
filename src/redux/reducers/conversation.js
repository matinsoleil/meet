import { handleActions } from 'redux-actions';
import { FETCH_CONVERSATION, DELETE_MESSAGE, DELETE_CONVERSATION, ADD_CONVERSATION } from '../actionstypes';
import DatabaseManage from '../../lib/databaseManager';
let mapActions = new Map([
    [
        FETCH_CONVERSATION + '_FULFILLED',
        (state, action) => [...action.payload],
    ],
    [
        FETCH_CONVERSATION + '_ADD',
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
        ADD_CONVERSATION,
        (state, action) => {
            state.push(action.payload)
            return [...state]
        },
    ],
    [
        DELETE_CONVERSATION,
        (state, action) => [...action.payload]
    ],
    [
        DELETE_MESSAGE,
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
export const restoreKey = FETCH_CONVERSATION + '_FULFILLED';
export const defaultValue = [];
DatabaseManage.mapping('conversation', [
    FETCH_CONVERSATION + '_ADD',
    DELETE_MESSAGE,
    ADD_CONVERSATION
], mapActions, 'local');
export const conversation = handleActions(mapActions, defaultValue);