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
        default:
            return state
    }
}
