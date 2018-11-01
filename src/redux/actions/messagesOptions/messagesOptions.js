import { SHOW_MULTI_SELECT_MESSAGES, ADD_MESSAGE, SELECT_MESSAGE, REMOVE_MESSAGE, MESSAGE_SELECTED, CANCEL_MULTI_SELECT } from "../../actionstypes";
import { deleteMessage } from "../conversation/fetchConversation";

export const multiSelectState = state => dispatch => {
    dispatch({
        type: SHOW_MULTI_SELECT_MESSAGES,
        payload: state,
    });
    (!state) && dispatch({
        type: CANCEL_MULTI_SELECT
    });
}

export const filterMessages = (action, messageId) => dispatch => {
    (action) ? dispatch(addMessage(messageId)) :
        dispatch(removeMessage(messageId));
    dispatch(messageSelected(messageId,action));
}

export const deleteMessagesSelected = (conversationId,messagesId) => dispatch => {
    dispatch(multiSelectState(false));
    for (const id in messagesId) {
        dispatch(deleteMessage(conversationId,messagesId[id]));
    }
}

export const messageSelected = (messageId,state=false) => {
    return {
        type: SELECT_MESSAGE,
        payload: messageId,
        state: state
    }
}

const addMessage = messageId => {
    return {
        type: ADD_MESSAGE,
        payload: messageId
    }
}

const removeMessage = messageId => {
    return {
        type: REMOVE_MESSAGE,
        payload: messageId
    }
}