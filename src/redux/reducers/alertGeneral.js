const estado = {
    msj: null,
    show: false
}
export const alertGeneral = (state = estado, action) => {
    switch (action.type) {
        case 'SHOW_ALERT_GENERAL':
            return {
                ...state,
                msj: action.payload,
                show: true,
            }
        case 'HIDE_ALERT_GENERAL':
            return {
                ...state,
                msj: null,
                show: false,
            }
        case 'PAUSE_HIDE_GENERAL_ALERT':
            return {
                ...state,
                msj: null,
                show: false,
            }
        default:
            return state
    }
}
