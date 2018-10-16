import { SHOW_MULTI_SELECT_MESSAGES, ADD_MESSAGE, REMOVE_MESSAGE } from "../actionstypes";

const defaultMessagesOptions = {
    messages:[],
    multiSelect: false,
}

export const messagesOptionsReducer = (state = defaultMessagesOptions, action) => {
    switch (action.type) {
        case SHOW_MULTI_SELECT_MESSAGES:
            return {
                ...state,
                multiSelect: action.payload
            }
        case ADD_MESSAGE:
            return{
                ...state,
                messages:[...state.messages,action.payload]
            }
        case REMOVE_MESSAGE:
            return{
                ...state,
                messages: state.messages.filter(messageId=>((messageId===action.payload)?false:true)),
            }
        default:
            return state;
    }
}