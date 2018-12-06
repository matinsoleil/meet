import { ActionTypes } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { db } from '../../../index';
import {store} from "../../store";
import {addMessages} from "../messages/messages";
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

export const addConversation = createAction(ActionTypes.ADD_CONVERSATION, async conversation => {
    try{
        let messages = await db.storage.find(Database.tables.messages, {conversationId: conversation.id});
        store.dispatch(addMessages(messages));
    }catch(e){
        //TODO: handle a error
    }
    return conversation;
});
