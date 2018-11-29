import { ActionTypes } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { db } from '../../../index';
import { Database } from '../../../config/config';

export const addMessages = createAction(ActionTypes.ADD_MESSAGES, (messages) => {
    // db.storage.add(Database.tables.messages, { id: message.id, data: message, message: message.message });
    return { messages };
}
);

export const addMessage = createAction(ActionTypes.FETCH_CONVERSATION_ADD, (conversationId, message) => {
    db.storage.add(Database.tables.messages, { id: message.id, data: message, message: message.message });
    return { conversationId, message };
}
);

export const deleteMessage = createAction(ActionTypes.DELETE_MESSAGE, (conversationId, messageId) => {
    db.storage.findKeyAndRemove(Database.tables.messages, messageId);
    return { conversationId, messageId };
}
);
