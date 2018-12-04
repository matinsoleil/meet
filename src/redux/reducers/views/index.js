import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
import {createConversationBarReducer} from "./createConversationBar";
import {timeFromNowReducer} from "./timeFromNow";
import { modalConfirmReducer } from './modalConfirm';
import { modalRadioOptionsReducer } from './modalRadioOptions';

export const viewsReducers = combineReducers({
    popup: popupReducer,
    createConversationBar: createConversationBarReducer,
    timeFromNow: timeFromNowReducer,
    modalConfirm: modalConfirmReducer,
    modalRadioOptions: modalRadioOptionsReducer
});