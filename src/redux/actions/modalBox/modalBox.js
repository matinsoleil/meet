import { modalActions } from "../../actionstypes";

export const showModal = (title, buttons, viewPath) => dispatch => {
    dispatch(setViewPath(viewPath));
    dispatch(setButtons(buttons));
    dispatch(setTitle(title));
    dispatch({
        type: modalActions.SHOW_MODAL,
    });
}

const setButtons = (buttons) => {
    return {
        type: modalActions.SET_BUTTONS,
        payload: buttons
    }
}

const setTitle = (title) => {
    return {
        type: modalActions.SET_TITLE,
        payload: title,
    }
}

const setViewPath = (viewPath) => {
    return {
        type: modalActions.SET_VIEW,
        payload: viewPath,
    }
}

