import {store} from '../../redux/store/index';
import {configureModalConfirm} from '../../redux/actions/views/modalConfirm';
import {configureModalRadioOptions} from '../../redux/actions/views/modalRadioOptions';
import {removeConversations, updateConversations} from '../../redux/actions/conversations/conversations';
import {toggleSupportSection, Type} from "../../redux/actions/views/supportSection";
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

    static removeChat(conversation) {
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

    static goOutOfGroup(conversation) {
        return {
            text: store.getState().country.translator.t('GO_OUT_OF_GROUP'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: store.getState().country.translator.t('ARE_YOU_SURE_TO_GO_OUT_OF_THE_GROUP'),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_GO_OUT'),
                        handler: () => {
                            store.dispatch(updateConversations([{...conversation, banned: true}]));
                            store.dispatch(togglePopup(
                                store.getState().country.translator.t('GROUP_OUT')
                            ))
                        }
                    }
                ],
                cancelButton: true,
                visible: true
            }))
        }
    }

    static removeChatHistory(conversation) {
        return {
            text: store.getState().country.translator.t('REMOVE_CHAT_HISTORY'),
            clickHandler: () => store.dispatch(configureModalConfirm({
                title: store.getState().country.translator.t('ARE_YOU_SURE_TO_DELETE_THE_CHAT_HISTORY'),
                buttons: [
                    {
                        text: store.getState().country.translator.t('GENERAL_DELETE'),
                        //TODO: add remove history handler
                        handler: () => {
                        }
                    }
                ],
                cancelButton: true,
                visible: true
            }))
        }
    }

    static toggleStoreConversation(conversation) {
        return {
            text:store.getState().country.translator.t(
                conversation.stored ?'REMOVE_CHAT_FROM_STORE':'STORE_CHAT'),
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

    static toggleSilenceConversation(conversation) {
        return {
            text: store.getState().country.translator.t(
                conversation.mutted.status ?'REMOVE_CHAT_SILENCE':'SILENCE_CHAT'),
            clickHandler: () => {
                if (conversation.mutted.status) {
                    store.dispatch(updateConversations([{...conversation, mutted: {status: false, expiration: 0}}]));
                    store.dispatch(togglePopup(store.getState().country.translator.t('CHAT_SILENCE_REMOVED')))
                } else {
                    let buttons = [
                        {
                            text: store.getState().country.translator.t('GENERAL_MUTE'),
                            handler: () => {
                                store.dispatch(updateConversations([{
                                    ...conversation,
                                    mutted: {
                                        status: true,
                                        expiration: +new Date() + parseInt(store.getState().views.modalRadioOptions.selectedRadioValue)
                                    }
                                }]));
                                store.dispatch(togglePopup(store.getState().country.translator.t('CHAT_SILENCED')));
                            }
                        }
                    ];
                    let options = [
                        {
                            text: store.getState().country.translator.t('GENERAL_MINUTES', {
                                minutes: timesToMute.minutes
                            }),
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
                    ];

                    store.dispatch(configureModalRadioOptions({
                        title: store.getState().country.translator.t('MUTE_WHILE'),
                        buttons: buttons,
                        options: options,
                        cancelButton: true,
                        visible: true,
                        selectedRadioValue: options.filter(option => option.default)[0].value
                    }));
                }
            }
        }
    }

    static togglePinConversation(conversation) {
        return {
            text: store.getState().country.translator.t(
                conversation.pinned ? 'REMOVE_CHAT_PIN':'ADD_CHAT_PIN'),
            clickHandler: () => {
                store.dispatch(updateConversations(
                    [{...conversation, pinned: !conversation.pinned}]
                ));
                store.dispatch(
                    togglePopup(store.getState().country.translator.t(
                        conversation.pinned ? 'CHAT_PIN_REMOVED':'CHAT_PIN_ADDED'))
                );
            }
        }
    }

    static toggleReadConversationStatus(conversation) {
        return {
            text: store.getState().country.translator.t(
                !conversation.unreadMessages.status ?'MARK_AS_UNREADED':'MARK_AS_READED'),
            clickHandler: () => store.dispatch(updateConversations(
                [{
                    ...conversation, unreadMessages: {
                        status: !conversation.unreadMessages.status,
                        messages: null
                    }
                }]
            ))
        }
    }

    static createNewChat(){
        return{
            text: store.getState().country.translator.t('NEW_CHAT'),
            clickHandler: () => store.dispatch(toggleSupportSection(
                store.getState().country.translator.t('NEW_CHAT'),
                Type.CREATE_GROUP
            )) ,
        }
    }

    static createNewGroupalChat(){
        return {
            text: store.getState().country.translator.t('NEW_GROUPAL_CHAT'),
            clickHandler: () => {
                return store.dispatch(toggleSupportSection(
                    store.getState().country.translator.t('NEW_GROUPAL_CHAT'),
                    Type.CREATE_GROUP
                ))
            },
        }
    }

    static createNewDiffusionChat(){
        return{
            text: store.getState().country.translator.t('NEW_DIFFUSION_CHAT'),
            clickHandler:null,
        }
    }

}

export default ControlMenuHelper;