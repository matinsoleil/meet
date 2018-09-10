import { handleActions } from 'redux-actions';
import { FETCH_CONTACTS } from '../constants';

export const contacts = handleActions({
    [FETCH_CONTACTS]: (state, action) => [...action.payload],
}, []);
