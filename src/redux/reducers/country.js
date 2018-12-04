import {ActionTypes} from './../../redux/actionstypes';
import DatabaseManage from '../../lib/databaseManager';
import CountriesHelper from '../../lib/helper/countries';
import Translate from '../../lib/translation/translate';

//TODO: pass DEFAULT_COUNTRY to a config file.
const DEFAULT_COUNTRY = 'mexico';
const DefaultCountryConfig = CountriesHelper.getCountry(DEFAULT_COUNTRY);

const portalCountryConfig = {
    ...DefaultCountryConfig,
    translator: new Translate(DefaultCountryConfig.dialect)
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
export const restoreKey = ActionTypes.GENERAL_SET_COUNTRY;
export const countryReducer = DatabaseManage.addSaver([
    ActionTypes.GENERAL_SET_COUNTRY,
],reducer,'local','country');