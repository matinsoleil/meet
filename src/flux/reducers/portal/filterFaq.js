import { ActionTypes } from '@flux/actionTypes';

export const filterReducer = (state = {}, action) => {
    
    switch (action.type) {
        case ActionTypes.PORTAL_SET_FAQ_FILTER:
            return { filter: action.payload };
        default:
            return state;
    }
}