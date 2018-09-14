import { handleActions } from 'redux-actions';
import { FETCH_CONVERSATION } from '../actionstypes';
export const conversation = handleActions({
    [FETCH_CONVERSATION]: (state, action) => [...action.payload],
}, []);
