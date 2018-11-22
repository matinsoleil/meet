import {handleActions} from 'redux-actions';
import {popupActions} from "../../actionstypes/index";
const defaultValues = {
    show:false,
    title:undefined
}
let mapActions = new Map([
    [
        popupActions.SHOW_POPUP,
        (state) => ({...state,show:!state.show})
    ],[
        popupActions.SET_POPUP_TEXT,
        (state,action) => ({...state,title:action.payload})
    ]
])
export const popupReducer = handleActions(mapActions,defaultValues);