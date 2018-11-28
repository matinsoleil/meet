import { handleActions } from 'redux-actions';
import { ContactActionTypes } from '../actionstypes';

const defaultState = {
    id: 1,
    name: "Viejo Lesbiano",
    label: "label contact 69",
    members: [{ id: 1 , name: 'Jose'} , {id: 2 , name: 'Juan'}],
    type: "basic",
};

const actionHandlersMap = new Map([
    [ContactActionTypes.SET_CONTACT, (state, action) => ({ ...state, ...action.payload })]
]);

export const contactReducer = handleActions(actionHandlersMap, defaultState);
