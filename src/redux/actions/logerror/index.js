import { apiPost } from '../../../api/index'
import { urlBaseLoggerError } from '../../../api/urls'
import axios from 'axios'

const dateUnix = Math.round((new Date()).getTime() / 1000);
export const addNotificationError = ( message, detail ) => {
    const datos = {
        "user": "[anonymous]",
        "timestamp": dateUnix,
        "message": message,
        "detail": detail
    }
    axios.post(urlBaseLoggerError, datos)
    .then(res => {
        return (res.data);
    })    
}