// import {ActionTypes} from '@flux/actionTypes.js';
// import {osInstance} from '@lib/os';
import {ActionTypes} from './../../../flux/actionTypes';
import {osInstance} from './../../../lib/os';

export const setOs = () => {
    return({
        type: ActionTypes.GENERAL_SET_OS,
        payload: osInstance.getOs()
    });
}