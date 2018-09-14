import { handleActions } from 'redux-actions';
import { FETCH_USER } from '../actionstypes';
export const users = handleActions({
    [FETCH_USER]: (state, action) => [...state, action.payload],
}, []);
