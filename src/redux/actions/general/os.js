import { ActionTypes } from './../../../redux/actionstypes/index';
import { osInstance } from './../../../lib/os';

export const setOs = () => {
    return({
        type: ActionTypes.GENERAL_SET_OS,
        payload: osInstance.getOs()
    });
}