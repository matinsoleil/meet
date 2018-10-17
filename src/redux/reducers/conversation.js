import { handleActions } from 'redux-actions';
import { FETCH_CONVERSATION, DELETE_MESSAGE } from '../actionstypes';
export const conversation = handleActions({
    [FETCH_CONVERSATION+'_FULFILLED']: (state, action) => [...action.payload],
    [FETCH_CONVERSATION+'_ADD']: (state,action)=>[...state,action.payload],
    [DELETE_MESSAGE]: (state,action)=>[...state].filter(message=>(message.id===action.payload)?false:true),
}, []);
