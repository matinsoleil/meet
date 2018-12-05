import {store} from '../../redux/store/index';
import {configureModalConfirm} from '../../redux/actions/views/modalConfirm';
import {configureModalRadioOptions} from '../../redux/actions/views/modalRadioOptions';
import {removeConversations, updateConversations} from '../../redux/actions/conversations/conversations';
import { deleteMessage } from '../../redux/actions/messages/messages';

class ControlMenuMessageHelper {
    
    static toggleReplyMessage (conversation, message) {
        return {
            text: store.getState().country.translator.t('REPLY'),
            clickHandler: () => store.dispatch(updateConversations(
                [{...conversation, stored: !conversation.stored}]
            ))
        }
    }

    static toggleResendMessage (conversation, message) {
        return {
            text: store.getState().country.translator.t('RESEND'),
            clickHandler: () => store.dispatch(updateConversations(
                [{...conversation, stored: !conversation.stored}]
            ))
        }
    }

    static toggleSelectSeveralMessage (conversation, message) {
        return {
            text: store.getState().country.translator.t('SELECT_SEVERAL'),
            clickHandler: () => store.dispatch(updateConversations(
                [{...conversation, stored: !conversation.stored}]
            ))
        }
    }

    static toggleRemoveMessage (conversation, message) {
        return {
            text: store.getState().country.translator.t('REMOVE'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: store.getState().country.translator.t('ARE_YOU_SURE_TO_DELETE_THE_CHAT_HISTORY'),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_DELETE'),
                        //TODO: add remove history handler
                        // handler: () => { console.log(" a a a a "); console.log(conversation.id); console.log(message.id); console.log(" z z z z "); }
                        handler: () => { 
                            store.dispatch(deleteMessage(conversation.id, message.id));
                         }
                    }
                ],
                cancelButton: true,
                visible: true 
            }))
        }
    }
}

export default ControlMenuMessageHelper;