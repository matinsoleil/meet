import {createAction} from 'redux-actions';
import {popupActions} from "../../actionstypes/index";

export const togglePopup = createAction(popupActions.SHOW_POPUP,(message,timeToHide=1500)=>({
    message,timeToHide
}));