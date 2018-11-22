import {createAction} from 'redux-actions';
import {popupActions} from "../../actionstypes";
import {store} from "../../store";

export const togglePopup = createAction(popupActions.SHOW_POPUP,async (message,timeToHide=1500) => {
    await store.dispatch(setTimeToHide((message)&&timeToHide));
    await store.dispatch(setPopupText(message));
    await store.dispatch({
        type:popupActions.SHOW_POPUP
    });
});

const setPopupText = createAction(popupActions.SET_POPUP_MESSAGE);
const setTimeToHide = createAction(popupActions.SET_TIME_TO_HIDE);