/*
faq.prototype.GENERAL = {max:8,name:'GENERAL'};
faq.prototype.CALLS = {max:11,name:'CALLS'};
faq.prototype.CHATS = {max:10,name:'CHATS'};
faq.prototype.CONTACTS = {max:8,name:'CONTACTS'};
faq.prototype.PROFILE = {max:13,name:'PROFILE'};
*/

export default class filters {
    constructor(Translator){
        this.Translator = Translator;
        this.GENERAL = {...this.GENERAL, label:Translator.t('FAQ_FILTERS_GENERAL')}
        this.CALLS = {...this.CALLS, label:Translator.t('FAQ_FILTERS_CALLS')}
        this.CHATS = {...this.CHATS, label:Translator.t('FAQ_FILTERS_CHATS')}
        this.CONTACTS = {...this.CONTACTS, label:Translator.t('FAQ_FILTERS_CONTACTS')}
        this.PROFILE = {...this.PROFILE, label:Translator.t('FAQ_FILTERS_PROFILE')}
        this.defaultFilters = [
            this.GENERAL,
            this.CALLS,
            this.CHATS,
            this.CONTACTS,
            this.PROFILE
        ]
    }
}

filters.prototype.GENERAL = {max:8,name:'GENERAL'};
filters.prototype.CALLS = {max:11,name:'CALLS'};
filters.prototype.CHATS = {max:10,name:'CHATS'};
filters.prototype.CONTACTS = {max:8,name:'CONTACTS'};
filters.prototype.PROFILE = {max:13,name:'PROFILE'};


