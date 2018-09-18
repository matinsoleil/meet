import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {GeneralReducers} from './general/combined';
import {PortalReducers} from './portal/combined';

export const reducers = combineReducers({
    general: GeneralReducers,
    portal: PortalReducers,
    router: routerReducer,
});