import {ActionTypes} from '@flux/actionTypes';

export const setHeaderHeight = (height) => {
    return {
        type: ActionTypes.GENERAL_SET_HEADER_HEIGHT,
        payload: height
    }
};