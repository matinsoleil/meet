import { PAUSE_HIDE_GENERAL_ALERT } from '../../actionstypes'
export const pauseHideGeneralAlert = () => dispatch => {
    dispatch({
        type: PAUSE_HIDE_GENERAL_ALERT
    })
}
export default pauseHideGeneralAlert;
