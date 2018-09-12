import { handleActions } from 'redux-actions';
import { FETCH_USER } from '../constants';

export const users = handleActions({
    [FETCH_USER]: (state, action) => [...state, action.payload],
}, []);
