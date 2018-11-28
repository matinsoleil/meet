import {createAction} from 'redux-actions';
import {ViewsActions} from "../../actionstypes";

export const toggleMenu = createAction(ViewsActions.CreateConversationBar.TOGGLE_MENU);