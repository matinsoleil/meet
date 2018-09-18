import { combineReducers } from "redux";
import { countryReducer } from './country';
import { osReducer } from './os';
import { countriesReducer } from './countries';

import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const generalReducers = combineReducers({
    country: countryReducer,
    countries: countriesReducer,
    os: osReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

export const GeneralReducers = persistReducer(persistConfig,generalReducers);
