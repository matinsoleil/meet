import countries from './../actionstypes/countries';

export const countriesReducer = (state = countries, actions) => {
    switch(actions.type){
        default:
            return state;
    }
}