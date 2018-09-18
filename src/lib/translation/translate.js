import Polyglot from 'node-polyglot'
import Language from './language'

export default class Translate {

  constructor (lang=null, source={}) {
    this._language = new Language(lang)
    this.pg = new Polyglot()
    let dict_merged = Object.assign (
                          this._language.messages || {},
                          source
                      );
    this.pg.extend(dict_merged)
  }

  get language () {
    return this._language.language
  }

  extend (dict) {
    this.pg.extend(dict)
  }

  t (key, vars = {}) {
    return this.pg.t(key, vars)
  }

}
