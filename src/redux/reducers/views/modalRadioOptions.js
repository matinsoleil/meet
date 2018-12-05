import {handleActions} from 'redux-actions';
import {ActionTypes} from "../../actionstypes/index";

export const defaultValues = {
    title: '',
    buttons: [],
    options: [],
    cancelButton: false,
    visible: false
};

const mapActions = new Map([
    [
        ActionTypes.MODAL_RADIO_OPTIONS_CONFIGURE,
        (state,action) => (action.payload),
    ]
]);

export const modalRadioOptionsReducer = handleActions(mapActions, defaultValues) ;