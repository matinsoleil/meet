import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { persistStore } from 'redux-persist';
import { reducers } from './../../redux/reducers/index'


export const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history));

export const store = createStore(reducers, {}, composeEnhancers(middleware));
export const persistor = persistStore(store);