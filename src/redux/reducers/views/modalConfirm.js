import {handleActions} from 'redux-actions';
import {ActionTypes} from "../../actionstypes/index";

export const defaultValues = {
    title: null,
    buttons: [],
    cancelButton: false,
    visible: false
};

const mapActions = new Map([
    [
        ActionTypes.MODAL_CONFIRM_CONFIGURE,
        (state,action) => (action.payload),
    ]
]);

export const modalConfirmReducer = handleActions(mapActions, defaultValues) ;