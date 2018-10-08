import { handleActions } from 'redux-actions';
import { SEARCH_CONTACTS } from '../actionstypes';
export const searchContacts = handleActions({
    [SEARCH_CONTACTS](state, action) {
        return action.payload;
    },
}, []);
