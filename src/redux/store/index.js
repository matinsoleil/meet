import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import promise from 'redux-promise-middleware'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promise(),thunk)));
