import { TOGGLE_RIGHT_SIDE } from "../actionstypes";

const estado = {
    show: false,
    showSectionSpecific: null
}
export const rightSection = (state = estado, action) => {
    switch (action.type) {
        case TOGGLE_RIGHT_SIDE:
            return{...state,
                show:!state.show,
                type:action.payload,
            }
        case 'SHOW_SECTION_RIGHT':
            return {
                ...state,
                show: true,
                showSectionSpecific: action.payload
            }
        case 'HIDE_SECTION_RIGHT':
            return {
                ...state,
                show: false,
                showSectionSpecific: null
            }
        default:
            return state
    }
}