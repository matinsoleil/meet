// import {ActionTypes} from '@flux/actionTypes';
import {ActionTypes} from './../../../redux/actionstypes/index';

export const setFilter = (filter) => {
    return{
        type:ActionTypes.PORTAL_SET_FAQ_FILTER,
        payload: filter
    }
}