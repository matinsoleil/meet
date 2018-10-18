import { SHOW_MULTI_SELECT_MESSAGES, ADD_MESSAGE, REMOVE_MESSAGE, SELECT_MESSAGE, CANCEL_MULTI_SELECT } from "../actionstypes";

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
        case CANCEL_MULTI_SELECT:
            return{
                ...state,
                messages:[],
                messageSelected:''
            }
        case ADD_MESSAGE:
            return{
                ...state,
                messages:[...state.messages,action.payload],
            }
        case REMOVE_MESSAGE:
            return{
                ...state,
                messages: state.messages.filter(messageId=>((messageId===action.payload)?false:true)),
            }
        case SELECT_MESSAGE:
            return{
                ...state,
                messageSelected:(action.state)?action.payload:state.messages.slice(-1)[0]
            }
        default:
            return state;
    }
}