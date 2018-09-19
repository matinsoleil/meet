import Translate from './../../../lib/translation/translate'
import { ActionTypes } from './../../actionstypes/index'

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
    
    console.log("Aqui ando");
    dispatch(setCurrentCountry(country));
    dispatch(setTranslator(country.dialect));
    return{
        type: 'invalid',
        payload: null
    }
}