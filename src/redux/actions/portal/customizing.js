// import { ActionTypes } from '@flux/actionTypes';
import { ActionTypes } from './../../../redux/actionstypes/index';

export const setHeaderHeight = (height) => {
    return {
        type: ActionTypes.GENERAL_SET_HEADER_HEIGHT,
        payload: height
    }
};