import {handleActions} from 'redux-actions';
import {popupActions} from "../../actionstypes/index";
const defaultValues = {
    show:false,
    autoClose:true,
    message:undefined,
    timeToHide:undefined,
}
let mapActions = new Map([
    [
        popupActions.SHOW_POPUP,
        (state) => ({...state,show:!state.show})
    ],[
        popupActions.SET_POPUP_MESSAGE,
        (state,action) => ({...state,message:action.payload})
    ],[
        popupActions.SET_TIME_TO_HIDE,
        (state,action) => ({...state,timeToHide:action.payload})
    ]
])
export const popupReducer = handleActions(mapActions,defaultValues);