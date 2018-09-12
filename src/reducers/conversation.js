import { handleActions } from 'redux-actions';
import { FETCH_CONVERSATION } from '../constants';

export const conversation = handleActions({
    [FETCH_CONVERSATION]: (state, action) => [...state, action.payload],
}, []);
