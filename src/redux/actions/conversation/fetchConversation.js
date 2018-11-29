// import { FETCH_CONVERSATION, DELETE_MESSAGE, FETCH_CONVERSATION_ADD } from '../../actionstypes'

import { ConversationActionTypes } from '../../actionstypes'


import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlConversation } from '../../../api/urls'
import { db } from '../../../index';
import { Database } from '../../../config/config';

const fetchConversationAction = createAction(ConversationActionTypes.FETCH_CONVERSATION, apiGet(urlConversation));

export const fetchConversation = () => dispatch => {
    dispatch(fetchConversationAction());
}

export const addMessage = createAction(ConversationActionTypes.FETCH_CONVERSATION_ADD, (conversationId, message) => {
    db.storage.add(Database.tables.messages, { id: message.id, data: message, message: message.message });
    return { conversationId, message };
}
);

export const deleteMessage = createAction(ConversationActionTypes.DELETE_MESSAGE, (conversationId, messageId) => {
    db.storage.findKeyAndRemove(Database.tables.messages, messageId);
    return { conversationId, messageId };
}
);
