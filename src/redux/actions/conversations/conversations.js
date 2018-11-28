import {createAction} from 'redux-actions';
import {ActionTypes} from "../../actionstypes";

export const updateConversations = createAction(ActionTypes.CONVERSATIONS_UPDATE);
export const removeConversations = createAction(ActionTypes.CONVERSATIONS_REMOVE);