// import Translate from '@lib/translation/translate';
// import {ActionTypes} from '@flux/actionTypes';
import Translate from './../../../lib/translation/translate';
import {ActionTypes} from './../../../flux/actionTypes';


export const setCurrentCountry = (country) => dispatch => {
    dispatch({
        type: ActionTypes.GENERAL_SET_COUNTRY,
        payload: country
    });
    return Promise.resolve;
}

export const setTranslator = (dialect) => dispatch => {
    let t = new Translate(dialect)
    dispatch({
        type: ActionTypes.GENERAL_SET_TRANSLATOR,
        payload: t,
    });
    return Promise.resolve;
}

export const setCountryConfig = (country)=> dispatch => {
    dispatch(setCurrentCountry(country));
    dispatch(setTranslator(country.dialect));
    return{
        type: 'invalid',
        payload: null
    }
}