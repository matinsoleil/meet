import {handleActions} from 'redux-actions';
import { TOGGLE_SUPPORT_SECTION} from "../../actionstypes/index";

const defaultValues = {
    show: false,
    type: undefined
}

const mapActions = new Map([
    [
        TOGGLE_SUPPORT_SECTION,
        (state,action) => ({...state,show:!state.show,...action.payload}),
    ]
]);

export const supportSectionReducer= handleActions(mapActions,defaultValues) ;