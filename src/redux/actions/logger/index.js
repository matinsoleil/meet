import log4javascript from 'log4javascript';
import { urlBaseLoggerError } from './../../../api/urls';
export const addNotificationError = () => {
    window.myLogger = log4javascript.getLogger();
    var ajaxAppender = new log4javascript.AjaxAppender(urlBaseLoggerError);
    ajaxAppender.setBatchSize(10);
    ajaxAppender.setSendAllOnUnload();
    window.myLogger.addAppender(ajaxAppender);
    window.onerror = function (message, url, lineNumber) {
        var errorMsg = "Console error- " + url + " : " + lineNumber + ": " + message
        window.myLogger.error(errorMsg);
        return true;
    };
}