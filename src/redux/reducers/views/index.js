import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
import {createConversationBarReducer} from "./createConversationBar";
import {timeFromNowReducer} from "./timeFromNow";

export const viewsReducers = combineReducers({
    popup: popupReducer,
    createConversationBar: createConversationBarReducer,
    timeFromNow: timeFromNowReducer
});