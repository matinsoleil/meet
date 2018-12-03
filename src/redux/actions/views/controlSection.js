import {createAction} from 'redux-actions';
import {searchActions} from "../../actionstypes";

export const setFilter = createAction(searchActions.CONVERSATIONS_FILTER);