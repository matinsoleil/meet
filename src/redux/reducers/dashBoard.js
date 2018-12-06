const estado = {
    imageDashBoard : null,
    pass: false,
    show: 'none'
}
export const dashBoard = (state = estado, action) => {
    switch (action.type) {
        case 'SHOW_DASHBOARD':
             return {
                 ...state,
                 show:action.payload
             }

        case 'SET_IMAGE_DASH_BOARD':
            console.log('image dash board');
            return {
                ...state,
                pass: true,
                imageDashBoard: action.payload
               
            }
        case 'GET_IMAGE_DASH_BOARD':
             console.log('pass image')
             return {
                ...state,
                pass: action.payload 
             }     
        default:
            return state
    }
}