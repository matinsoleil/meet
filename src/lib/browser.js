export default class Browser {
  static getLanguage () {
    return navigator.language || navigator.userLanguage
  }
}
