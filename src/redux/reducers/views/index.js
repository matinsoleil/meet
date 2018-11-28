import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
import {createConversationBarReducer} from "./createConversationBar";

export const viewsReducers = combineReducers({
    popup: popupReducer,
    createConversationBar: createConversationBarReducer
})