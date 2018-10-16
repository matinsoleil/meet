import { SHOW_MULTI_SELECT_MESSAGES, ADD_MESSAGE, SELECT_MESSAGE, REMOVE_MESSAGE } from "../../actionstypes";

export const multiSelectState = state => {
    return {
        type: SHOW_MULTI_SELECT_MESSAGES,
        payload: state,
    }
}

export const messageSelected = message => {
    return {
        type: SELECT_MESSAGE,
        payload: message
    }
}

export const filterMessages = (action, messageId) => dispatch => {
    (action) ? dispatch(addMessage(messageId)) :
        dispatch(removeMessage(messageId));
}

export const addMessage = messageId => {
    return {
        type: ADD_MESSAGE,
        payload: messageId
    }
}

export const removeMessage = messageId => {
    return {
        type: REMOVE_MESSAGE,
        payload: messageId
    }
}