import {handleActions} from 'redux-actions';
import {popupActions} from "../../actionstypes/index";
const defaultValues = {
    show:false,
    autoClose:true,
    message:undefined,
}
let mapActions = new Map([
    [
        popupActions.SHOW_POPUP,
        (state,action) => ({...state,show:!state.show,...action.payload})
    ],
])
export const popupReducer = handleActions(mapActions,defaultValues);