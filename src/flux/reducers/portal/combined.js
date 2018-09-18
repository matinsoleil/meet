import {combineReducers} from "redux";
import {customizingReducer} from "./customizing";
import {filterReducer} from './filterFaq';

export const PortalReducers = combineReducers({
    customizing: customizingReducer,
    faq: filterReducer
});
