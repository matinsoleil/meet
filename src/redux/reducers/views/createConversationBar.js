import {handleActions} from 'redux-actions';
import {ViewsActions} from "../../actionstypes/index";

const defaultValues = {
    isMenuOpened: false
};

let mapActions = new Map([
    [
        ViewsActions.CreateConversationBar.TOGGLE_MENU,
        (state,action) => ({ ...state, isMenuOpened: action.payload !== null ? action.payload : !state.isMenuOpened })
    ],
]);

export const createConversationBarReducer = handleActions(mapActions,defaultValues);