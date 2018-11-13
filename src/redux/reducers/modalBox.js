import { modalActions } from "../actionstypes";
const defaultState= {
    show:false,
    title:undefined,
    buttons:undefined,
    viewPath:undefined
}
export const modalBoxReducer = (state = {...defaultState}, action) => {
    switch(action.type){
        case modalActions.SHOW_MODAL:
            return{...state,show:!state.show}
        case modalActions.SET_BUTTONS:
            return{...state,buttons:action.payload}
        case modalActions.SET_TITLE:
            return{...state,title:action.payload}
        case modalActions.SET_VIEW:
            return{...state,viewPath:action.payload}
        default:
            return {...state}
    }
}