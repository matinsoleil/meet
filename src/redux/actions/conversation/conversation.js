import { ActionTypes } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { db } from '../../../index';
import { Database } from '../../../config/config';

// const fetchConversationAction = createAction(ActionTypes.FETCH_CONVERSATION, apiGet(urlConversation));
// export const fetchConversation = () => dispatch => {
//     dispatch(fetchConversationAction());
// }
export const fetchConversation = createAction(ActionTypes.FETCH_CONVERSATION, (conversation) => {
    // db.storage.findKeyAndRemove(Database.tables.messages, messageId);
    return { conversation };
    }
);
export const addConversation = createAction(ActionTypes.ADD_CONVERSATION, (conversation) => {
    return { conversation };
    }
);
