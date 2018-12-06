import { store } from '../../redux/store/index';
import { configureModalConfirm } from '../../redux/actions/views/modalConfirm';
import { updateMessage } from '../../redux/actions/messages/messages';
import { messageSelected } from '../../redux/actions/messagesOptions/messagesOptions';


class ControlMenuMessageHelper {

    static toggleReplyMessage(conversation, message) {
        return {
            text: store.getState().country.translator.t('REPLY'),
            // clickHandler: () => alert(" ideas ")
            clickHandler: () => store.dispatch(messageSelected(message.id, true))
        }
    }

    static toggleResendMessage(conversation, message) {
        return {
            text: store.getState().country.translator.t('RESEND'),
            clickHandler: () => null
        }
    }

    static toggleSelectSeveralMessage(conversation, message) {
        return {
            text: store.getState().country.translator.t('SELECT_SEVERAL'),
            clickHandler: () => null
        }
    }

    static toggleRemoveMessage(message) {
        return {
            text: store.getState().country.translator.t('REMOVE'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: store.getState().country.translator.t('ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_CHAT'),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_DELETE'),
                        handler: () => {
                            message.message= store.getState().country.translator.t('YOU_DELETED_THIS_CHAT');
                            store.dispatch(updateMessage(message));
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