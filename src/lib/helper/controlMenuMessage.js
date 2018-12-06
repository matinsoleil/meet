import { store } from '../../redux/store/index';
import { configureModalConfirm } from '../../redux/actions/views/modalConfirm';
import { deleteMessage } from '../../redux/actions/messages/messages';

class ControlMenuMessageHelper {

    static toggleReplyMessage(conversation, message) {
        return {
            text: store.getState().country.translator.t('REPLY'),
            clickHandler: () => null
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
                            store.dispatch(deleteMessage(message));
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