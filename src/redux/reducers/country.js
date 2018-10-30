import {ActionTypes} from './../../redux/actionstypes';
import DatabaseManage from '../../lib/databaseManager';

const portalCountryConfig = {
    name: null,
    dialect: null,
    region: null,
    translator: null
};

let reducer  = (state = {...portalCountryConfig}, action) => {
    switch(action.type){
        case ActionTypes.GENERAL_SET_COUNTRY:
        return {
            ...state,
            ...action.payload
        }
        case ActionTypes.GENERAL_SET_TRANSLATOR:
        return {
            ...state,
            translator: action.payload
        }
        default:
        return state
    }
}

export const countryReducer = DatabaseManage.addSaver([
    ActionTypes.GENERAL_SET_COUNTRY,
],reducer,'local','country');