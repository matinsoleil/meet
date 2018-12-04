import {handleActions} from 'redux-actions';
import {searchActions} from "../../actionstypes";

let mapActions = new Map([
    [
        searchActions.CONVERSATIONS_FILTER,
        (state,action) => ({...state,filter:action.payload}),
    ]
]);

export const controlSectionReducer = handleActions(mapActions,{});