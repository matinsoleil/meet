import { SHOW_ALERT_GENERAL } from '../../actionstypes'
export const showAlertGeneral = (message) => dispatch => {
    dispatch({
        type: SHOW_ALERT_GENERAL,
        payload: message,
    })
}
export default showAlertGeneral;
