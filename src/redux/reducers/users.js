import { handleActions } from 'redux-actions';
import { FETCH_USER } from '../actionstypes';
export const users = handleActions({
    [FETCH_USER+'_FULFILLED']: (state, action) => [...state, action.payload],
}, []);
