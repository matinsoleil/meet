import { ActionTypes } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { db } from '../../../index';
import { Database } from '../../../config/config';

export const fetchMessages = createAction(ActionTypes.FETCH_MESSAGES, () => {
    // db.storage.add(Database.tables.messages, { id: message.id, data: message, message: message.message });
}
);

export const addMessages = createAction(ActionTypes.ADD_MESSAGES, (messages) => {
    // db.storage.addRows(Database.tables.messages, messages);
    return { messages };
}
);

export const addMessage = createAction(ActionTypes.ADD_MESSAGE, (message) => {
    db.storage.add(Database.tables.messages, message);
    return { message };
}
);

export const updateMessage = createAction(ActionTypes.UPDATE_MESSAGE, (message) => {
    // db.storage.add(Database.tables.messages, message);
    return { message };
    }
);

export const deleteMessage = createAction(ActionTypes.DELETE_MESSAGE, (message) => {
    // db.storage.findKeyAndRemove(Database.tables.messages, messageId);
    return { message };
}
);