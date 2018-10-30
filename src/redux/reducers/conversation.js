import { handleActions } from 'redux-actions';
import { FETCH_CONVERSATION, DELETE_MESSAGE, DELETE_CONVERSATION } from '../actionstypes';
import DatabaseManage from '../../lib/databaseManager';

let mapActions = new Map([
    [
        FETCH_CONVERSATION + '_FULFILLED',
        (state, action) => [...action.payload],
    ],
    [
        FETCH_CONVERSATION + '_ADD',
        (state, action) => [...state, action.payload]
    ],
    [
        DELETE_CONVERSATION,
        (state, action) => [...action.payload]
    ],
    [
        DELETE_MESSAGE,
        (state, action) => [...state].filter(message => (message.id === action.payload) ? false : true)
    ],
]);

export const restoreKey = FETCH_CONVERSATION+'_FULFILLED';
export const defaultValue = [];
DatabaseManage.mapping('conversation',[
    FETCH_CONVERSATION+'_ADD',
    DELETE_MESSAGE
],mapActions,'local');
export const conversation = handleActions( mapActions,defaultValue);
