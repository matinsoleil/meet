import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
import {supportSectionReducer} from "./supportSection";
import {createConversationBarReducer} from "./createConversationBar";
import {timeFromNowReducer} from "./timeFromNow";
import { modalConfirmReducer } from './modalConfirm';
import { modalRadioOptionsReducer } from './modalRadioOptions';
import {controlSectionReducer} from "./controlSection";

export const viewsReducers = combineReducers({
    popup: popupReducer,
    supportSection: supportSectionReducer,
    controlSection:controlSectionReducer,
    createConversationBar: createConversationBarReducer,
    timeFromNow: timeFromNowReducer,
    modalConfirm: modalConfirmReducer,
    modalRadioOptions: modalRadioOptionsReducer,
});