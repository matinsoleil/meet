import { handleActions } from 'redux-actions';
import { FETCH_CONTACTS } from '../../constants/index';

export const contacts = handleActions({
    [FETCH_CONTACTS]: (state, action) => [...action.payload],
}, []);
