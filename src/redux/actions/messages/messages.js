import { ActionTypes } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { db } from '../../../index';
import { Database } from '../../../config/config';

export const fetchMessages = createAction(ActionTypes.FETCH_MESSAGES, () => {
    // db.storage.add(Database.tables.messages, { id: message.id, data: message, message: message.message });
}
);

export const addMessages = createAction(ActionTypes.ADD_MESSAGES);

export const addMessage = createAction(ActionTypes.ADD_MESSAGE, (message) => {
    db.storage.add(Database.tables.messages, message);
    return { message };
}
);

export const updateMessage = createAction(ActionTypes.UPDATE_MESSAGE, (message) => {
    let key = message.id
    let param = { message: message.message }
    db.storage.findOneAndRemove(Database.tables.messages, key, param);
    return { message };
}
);

export const deleteMessage = createAction(ActionTypes.DELETE_MESSAGE, (message) => {
    // db.storage.findKeyAndRemove(Database.tables.messages, messageId);
    return { message };
}
);