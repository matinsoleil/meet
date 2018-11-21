import { TOGGLE_RIGHT_SIDE, SET_TITLE_RIGHT_SIDE, SET_TYPE_RIGHT_SIDE } from "../actionstypes";

const estado = {
    show: false,
    type: undefined
}
export const rightSection = (state = estado, action) => {
    switch (action.type) {
        case TOGGLE_RIGHT_SIDE:
            return{...state,
                show:!state.show,
            }
        case SET_TITLE_RIGHT_SIDE:
            return{...state,
                title: action.payload
            }
        case SET_TYPE_RIGHT_SIDE:
            return{...state,
                type: action.payload
            }
        default:
            return state
    }
}