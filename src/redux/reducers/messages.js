import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actionstypes';


const defaultState = [

];
// const defaultState = null;
const actionHandlersMap = new Map([
    [ActionTypes.FETCH_MESSAGES, (state, action) => ({
        ...state, ...action.payload
    })
    ],
    [
        ActionTypes.ADD_MESSAGES, (state, action) => { return action.payload.messages }
    ],
    [
        ActionTypes.ADD_MESSAGE,
        (state, action) => {
            state.push(action.payload.message)
            return [...state];
        },
    ],
    [
        ActionTypes.DELETE_MESSAGE,
        (state, action) => {
            return state.filter(messages => ((messages.id !== action.payload.messageId)))
        },

        ActionTypes.UPDATE_MESSAGE,
        (state, action) => {
            // conversation => action.payload.filter(updated => conversation.id === updated.id)[0] || conversation
            // return state.filter(messages => ((messages.id !== action.payload.messageId)))
            return [...state];
        }

    ],

]);

export const messagesReducer = handleActions(actionHandlersMap, defaultState);
