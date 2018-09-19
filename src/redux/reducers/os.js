import { ActionTypes } from './../actionstypes';

export const osReducer = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.GENERAL_SET_OS:
            return action.payload;
        default:
            return state;
    }
}