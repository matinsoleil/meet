
const infoCards = (Translator) => {
    return [

        {
            title: Translator.t('FAQ_CARD_CHAT'),
            body: Translator.t('FAQ_CARD_BODY_CHAT')
        },
        {
            title: Translator.t('FAQ_CARD_GROUPS'),
            body: Translator.t('FAQ_CARD_BODY_GROUPS')
        },
        {
            title: Translator.t('FAQ_CARD_CONTACTS'),
            body: Translator.t('FAQ_CARD_BODY_CONTACTS')
        },
        {
            title: Translator.t('FAQ_CARD_TEMP_MESSAGES'),
            body: Translator.t('FAQ_CARD_BODY_TEMP_MESSAGES')
        },
        {
            title: Translator.t('FAQ_CARD_GROUP_CALL'),
            body: Translator.t('FAQ_CARD_BODY_GROUP_CALL')
        },
        {
            title: Translator.t('FAQ_CARD_GROUP_VIDEOCALL'),
            body: Translator.t('FAQ_CARD_BODY_GROUP_VIDEOCALL')
        },
    ];
}
export default class cardsFaq {
    static getInfoCards = (Translator) => {
        return infoCards(Translator);
    }
}