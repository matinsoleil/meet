import {store} from '../../redux/store/index';
import {configureModalConfirm} from '../../redux/actions/views/modalConfirm';
import {configureModalRadioOptions} from '../../redux/actions/views/modalRadioOptions';
import {removeConversations, updateConversations} from '../../redux/actions/conversations/conversations';
import {togglePopup} from './../../redux/actions/views/popup';
const conversationTypes = {
    basic: 'basic',
    group: 'group'
};

const timesToMute = {
    minutes: 15,
    hour: 1,
    hours: 8,
    week: 1,
    year: 1
};

const timesToMuteInMillis = {
    minutes: 60 * 15 * 1000,
    hour: 60 * 60 * 1000,
    hours: 8 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000
};

class ControlMenuHelper {
    
    static removeChat (conversation) {
        return {
            text: store.getState().country.translator.t('REMOVE_CHAT'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: conversation.type === conversationTypes.group ?
                    store.getState().country.translator.t('ARE_YOU_SURE_TO_DELETE_THE_GROUP') :
                    store.getState().country.translator.t('ARE_YOU_SURE_TO_DELETE_THE_CHAT_WITH', {chatName: conversation.name}),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_DELETE'),
                        handler: () => {
                            store.dispatch(removeConversations([conversation]));
                            store.dispatch(togglePopup(store.getState().country.translator.t('YOU_DELETED_THE_CHAT_WITH',{name:conversation.name})));
                        }
                    }
                ],
                cancelButton: true,
                visible: true 
            }))
        }
    }

    static goOutOfGroup (conversation) {
        return {
            text: store.getState().country.translator.t('GO_OUT_OF_GROUP'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: store.getState().country.translator.t('ARE_YOU_SURE_TO_GO_OUT_OF_THE_GROUP'),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_GO_OUT'),
                        handler: () => store.dispatch(updateConversations([{...conversation, banned: true}]))
                    }
                ],
                cancelButton: true,
                visible: true 
            }))
        }
    }

    static removeChatHistory (conversation) {
        return {
            text: store.getState().country.translator.t('REMOVE_CHAT_HISTORY'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: store.getState().country.translator.t('ARE_YOU_SURE_TO_DELETE_THE_CHAT_HISTORY'),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_DELETE'),
                        //TODO: add remove history handler
                        handler: () => {}
                    }
                ],
                cancelButton: true,
                visible: true 
            }))
        }
    }

    static toggleStoreConversation (conversation) {
        return {
            text: conversation.stored ?
                store.getState().country.translator.t('REMOVE_CHAT_FROM_STORE') :
                store.getState().country.translator.t('STORE_CHAT'),
            clickHandler: () => {
                store.dispatch(updateConversations(
                    [{...conversation, stored: !conversation.stored}]
                ));
                store.dispatch(togglePopup(store.getState().country.translator.t(
                    (!conversation.stored) ? 'CHAT_STORED':'CHAT_REMOVED'
                )));
            }
        }
    }

    static toggleSilenceConversation (conversation) {
        return {
            text: conversation.mutted.status ?
                store.getState().country.translator.t('REMOVE_CHAT_SILENCE') : 
                store.getState().country.translator.t('SILENCE_CHAT'),
            clickHandler: () => {
                conversation.mutted.status ? 
                    null : 
                    store.dispatch(configureModalRadioOptions({
                        title: store.getState().country.translator.t('MUTE_WHILE'),
                        buttons: [
                            {
                                text: store.getState().country.translator.t('GENERAL_MUTE'),
                                handler: (options) => {
                                    console.log(options)
                                }
                            }
                        ],
                        options: [
                            {
                                text: store.getState().country.translator.t('GENERAL_MINUTES', { minutes: timesToMute.minutes }),
                                value: timesToMuteInMillis.minutes,
                                default: true,
                            },
                            {
                                text: store.getState().country.translator.t('GENERAL_HOUR'),
                                value: timesToMuteInMillis.hour,
                            },
                            {
                                text: store.getState().country.translator.t('GENERAL_HOURS', {hours: timesToMute.hours}),
                                value: timesToMuteInMillis.hours,
                            },
                            {
                                text: store.getState().country.translator.t('GENERAL_WEEK'),
                                value: timesToMuteInMillis.week,
                            },
                            {
                                text: store.getState().country.translator.t('GENERAL_YEAR'),
                                value: timesToMuteInMillis.year,
                            }
                        ],
                        cancelButton: true,
                        visible: true 
                    }))
            }
            /*() => this.props.updateConversations(
                [{...this.props.conversation, mutted: !this.props.conversation.mutted}]
            )*/
        }
    }

    static togglePinConversation (conversation) {
        return {
            text: conversation.pinned ?
                store.getState().country.translator.t('REMOVE_CHAT_PIN') : 
                store.getState().country.translator.t('ADD_CHAT_PIN'),
            clickHandler: () => store.dispatch(updateConversations(
                [{...conversation, pinned: !conversation.pinned}]
            ))
        }
    }

    static toggleReadConversationStatus (conversation) {
        return {
            text: !conversation.unreadMessages.status ?
                store.getState().country.translator.t('MARK_AS_UNREADED') : 
                store.getState().country.translator.t('MARK_AS_READED'),
            clickHandler: () => store.dispatch(updateConversations(
                [{...conversation, unreadMessages: {
                        status: !conversation.unreadMessages.status,
                        messages: null
                }}]
            ))
        }
    }
}

export default ControlMenuHelper;