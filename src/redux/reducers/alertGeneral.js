const estado = {
    msj: null,
    show: false
}
export const alertGeneral = (state = estado, action) => {
    switch (action.type) {
        case 'SHOW_ALERT_GENERAL':
            return {
                ...state,
                msj: action.msj,
                show: true,
            }
        default:
            return state
    }
}
