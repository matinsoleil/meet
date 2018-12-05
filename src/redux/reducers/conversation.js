import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actionstypes';

const defaultState = null;

const actionHandlersMap = new Map([
    [
        ActionTypes.ADD_CONVERSATION,
        (state, action) => action.payload
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
