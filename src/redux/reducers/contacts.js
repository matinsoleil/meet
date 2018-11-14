import { handleActions } from 'redux-actions'
import { FETCH_CONTACTS, UPDATE_CONTACTS, ADD_CONTACT } from '../actionstypes'
import DatabaseManage from '../../lib/databaseManager';

let mapActions = new Map([
    [
        FETCH_CONTACTS + '_FULFILLED',
        (state, action) => [...action.payload]
    ], [
        UPDATE_CONTACTS,
        (state, action) => [...action.payload]
    ], [
        ADD_CONTACT, (state, action) => {
            const createGroup = state
            createGroup.unshift(action.payload)
            return [...createGroup]
        }
    ]
]
);

export const restoreKey = FETCH_CONTACTS + '_FULFILLED';
export const defaultValue = [];
DatabaseManage.mapping('contacts', [
    FETCH_CONTACTS + '_ADD',
    UPDATE_CONTACTS,
    ADD_CONTACT
], mapActions, 'local');
export const contacts = handleActions(mapActions, defaultValue);
