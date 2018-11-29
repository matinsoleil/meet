import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
import {supportSectionReducer} from "./supportSection";
import {createConversationBarReducer} from "./createConversationBar";
import {timeFromNowReducer} from "./timeFromNow";

export const viewsReducers = combineReducers({
    popup: popupReducer,
    supportSection: supportSectionReducer,
    createConversationBar: createConversationBarReducer,
    timeFromNow: timeFromNowReducer
})