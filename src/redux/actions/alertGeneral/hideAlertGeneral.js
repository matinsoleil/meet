import { HIDE_ALERT_GENERAL } from '../../actionstypes'
export const hideAlertGeneral = () => dispatch => {
    dispatch({
        type: HIDE_ALERT_GENERAL
    })
}
export default hideAlertGeneral;
