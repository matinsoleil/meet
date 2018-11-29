import {createAction} from 'redux-actions';
import {ActionTypes} from "../../actionstypes";

export const updateTimeFromNow = createAction(ActionTypes.TIME_FROM_NOW_UPDATE);