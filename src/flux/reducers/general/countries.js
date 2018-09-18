import countries from '@flux/states/countries';

export const countriesReducer = (state = countries, actions) => {
    switch(actions.type){
        default:
            return state;
    }
}