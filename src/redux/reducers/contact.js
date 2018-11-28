import { handleActions } from 'redux-actions';
import { ContactActionTypes } from '../actionstypes';

const defaultState = {
    name: 'Scarlett Johansson',
    isOnline: false,
    avatar: '',
    authentication: {}
};

const actionHandlersMap = new Map([
    [ContactActionTypes.SET_CONTACT, (state, action) => ({ ...state, ...action.payload })]
]);

export const contactReducer = handleActions(actionHandlersMap, defaultState);
