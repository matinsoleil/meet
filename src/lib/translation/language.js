import Browser from '../browser'
export default class Language {
    constructor(language = null) {
        this._path = `i18n`
        this._language = language
    }

    get language() {
        return this._language
    }

    set language(language) {
        this._language = language
    }

    get path() {
        return this._path
    }

    get messages() { //traerlo de un estado, redux
        this.language = (this.language === null) ? Browser.getLanguage() : this.language
        try {
            this._messages = require(`../../${this._path}/${this.language}.json`)
        } catch (e) {
            console.info(`The language "${this.language}" is not defined, default language set in 'es'`)
            let language = 'es_MX';
            try {
                //language = this.language.split('-')
                //this._messages = requiOe(`@/${this._path}/${language[0]}.json`)
                this._messages = require(`../../${this._path}/${language}.json`);
                this.language = language
            } catch (e) {
                console.info(`The language "${language[0]}" is not defined`);
                /*let config = require('@/config/config.js');
                this._messages = require(`@/${this._path}/${config.language.language}.json`)
                this.language = config.language.language*/
            }
        }
        return this._messages
    }
}
