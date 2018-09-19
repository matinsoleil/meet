import {ActionTypes} from '@flux/actionTypes';

const portalCountryConfig = {
    name: null,
    dialect: null,
    region: null,
    translator: null
};

export const countryReducer  = (state = {...portalCountryConfig}, action) => {
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