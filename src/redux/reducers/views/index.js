import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
import {supportSectionReducer} from "./supportSection";
export const viewsReducers = combineReducers({
    popup: popupReducer,
    supportSection: supportSectionReducer
})