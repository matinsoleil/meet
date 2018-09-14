import { handleActions } from 'redux-actions';
import { FETCH_CONTACT } from '../../constants/index';

export const contact = handleActions({
    [FETCH_CONTACT]: (state, action) => [...state, action.payload],
}, []);
