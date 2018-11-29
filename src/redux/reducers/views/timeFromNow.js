import {handleActions} from 'redux-actions';
import { ActionTypes } from "../../actionstypes/index";

const defaultValues = {
    shouldUpdate: true
};

const mapActions = new Map([
    [
        ActionTypes.TIME_FROM_NOW_UPDATE,
        (state,action) => ({...state, shouldUpdate: action.payload}),
    ]
]);

export const timeFromNowReducer = handleActions(mapActions,defaultValues) ;