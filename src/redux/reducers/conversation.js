import { handleActions } from 'redux-actions';
import { FETCH_CONVERSATION } from '../actionstypes';
export const conversation = handleActions({
    [FETCH_CONVERSATION+'_FULFILLED']: (state, action) => [...action.payload],
    [FETCH_CONVERSATION+'_ADD']: (state,action)=>[...state,action.payload]
}, []);
