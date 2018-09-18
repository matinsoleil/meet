import {ActionTypes} from '@flux/actionTypes';

export const setFilter = (filter) => {
    return{
        type:ActionTypes.PORTAL_SET_FAQ_FILTER,
        payload: filter
    }
}