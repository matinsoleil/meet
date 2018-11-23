import {combineReducers} from 'redux';
import {popupReducer} from "./popup";
export const viewsReducers = combineReducers({
    popup: popupReducer,
})