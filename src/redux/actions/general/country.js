import Translate from './../../../lib/translation/translate';
import CountriesHelper from '../../../lib/helper/countries';
import {Database} from '../../../config/config';
import {ActionTypes} from './../../actionstypes/index';
import {db} from '../../../index';
import {createAction} from 'redux-actions';
import {store} from '../../store/index';

const DEFAULT_COUNTRY = 'mexico';

export const setTranslator = createAction(ActionTypes.GENERAL_SET_TRANSLATOR);

/**
 * Set the country on Redux and the DB
 * @type {actionCreator}
 */
export const setCountry = createAction(ActionTypes.GENERAL_SET_COUNTRY, country => {
    try{
        db.storage.put(Database.tables.config, {key: 'country', data: country});
    }catch(e){
        console.error('Cannot save on the local storage: ' + e);
    }
    return country;
});

/**
 * Set the region config
 * @param country
 * @returns {Promise<void>}
 */
export const setRegionConfig = async (country = null) => {
    if (country) {
       store.dispatch(setCountry(country));
       store.dispatch(setTranslator(new Translate(country.dialect)));
    } else {
        try {
            let countryRecord = await db.storage.findOne(Database.tables.config, {key: 'country'});
            country = countryRecord.data;
        } catch (e) {
            country = CountriesHelper.getCountry(DEFAULT_COUNTRY);
        }
        store.dispatch(setCountry(country || CountriesHelper.getCountry(DEFAULT_COUNTRY)));
        store.dispatch(setTranslator(new Translate(country.dialect || CountriesHelper.getCountry(DEFAULT_COUNTRY).dialect)));
    }
};