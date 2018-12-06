import { SHOW_DASH_BOARD, SET_IMAGE_DASH_BOARD, GET_IMAGE_DASH_BOARD } from "../../actionstypes";

export const showDashBoard = (show) => dispatch => {
    dispatch({
        type: SHOW_DASH_BOARD,
        payload: show
    });
}

export const imageDashBoard = (srcImage)=> dispatch => {
    dispatch( {
         type: SET_IMAGE_DASH_BOARD,
         payload: srcImage
        })
}

export const getImageDashBoard = (pass)=> dispatch => {
    dispatch( {
         type: GET_IMAGE_DASH_BOARD,
         payload: pass
        })
}