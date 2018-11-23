import {handleActions} from 'redux-actions';
import {UserActionTypes} from '../actionstypes';

const defaultState = {
    name: 'John Doe',
    isOnline: false,
    avatar: '',
    status: 'Hey, I\'m using Claro connect!',
    authentication: {}
};

const actionHandlersMap = new Map([
    [UserActionTypes.SET_USER , (state, action) => ({ ...state, ...action.payload })]
]);

export const userReducer = handleActions(actionHandlersMap, defaultState);