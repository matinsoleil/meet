import { handleActions } from 'redux-actions'
import { FETCH_CONTACTS, FILE_CONTACTS, ADD_CONTACT, FIX_CONTACTS } from '../actionstypes'
import DatabaseManage from '../../lib/databaseManager';

let mapActions = new Map([
    [
        FETCH_CONTACTS + '_FULFILLED',
        (state, action) => [...action.payload]
    ], [
        FILE_CONTACTS,
        (state, action) => {
            const contacts = state
            contacts.filter(messageId => ((messageId === action.payload) ? false : true))
            return [...contacts]
        }
    ], [
        FIX_CONTACTS,
        (state, action) => {
            const contacts = state
            contacts.filter(messageId => ((messageId === action.payload) ? false : true))
            return [...contacts]
        }
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
    FILE_CONTACTS,
    FIX_CONTACTS,
    ADD_CONTACT
], mapActions, 'local');
export const contacts = handleActions(mapActions, defaultValue);
