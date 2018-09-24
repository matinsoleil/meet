import { handleActions } from 'redux-actions';
import { FETCH_CONTACT } from '../actionstypes';
export const contact = handleActions({
    [FETCH_CONTACT+'_FULFILLED']: (state, action) => [...state, action.payload],
}, []);
