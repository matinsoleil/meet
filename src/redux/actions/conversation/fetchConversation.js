import { FETCH_CONVERSATION, DELETE_MESSAGE } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlConversation } from '../../../api/urls'
import {db} from '../../../index';
import {Database} from '../../../config/config';

const fetchConversationAction = createAction(FETCH_CONVERSATION, apiGet(urlConversation));
export const fetchConversation = () => dispatch => {
    dispatch(fetchConversationAction());
}
// export const addMessage = (message) => {  
//connection.send(JSON.stringify(message))
export const addMessage = (conversationId, message) => {
    const resp = db.storage.put(Database.tables.messages, {id: message.id, data: message});

    console.log(" (*) (*) (*) ");
    console.log(resp);
    console.log(" [!] [!] [!] ");







    return {
        type: FETCH_CONVERSATION + '_ADD',
        payload: { conversationId, message }
    }
}

export const deleteMessage = (conversationId, messageId) => {
    return {
        type: DELETE_MESSAGE,
        payload: { conversationId, messageId }
    }
}

// const fetchConversationAction = createAction(FETCH_CONVERSATION, (msg) => {
//     db.storage.put(Database.tables.messages, {id: message.id, data: message});
//     return msg;
// });
