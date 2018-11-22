import {createAction} from 'redux-actions';
import { TOGGLE_RIGHT_SIDE, SET_TITLE_RIGHT_SIDE, SET_TYPE_RIGHT_SIDE } from '../../actionstypes';
import { store } from '../../store';

export const toggleRightSide = createAction(TOGGLE_RIGHT_SIDE,async (title,type)=>{
    await store.dispatch(setTitleRightSide(title));
    await store.dispatch(setTypeRightSide(type));
    await store.dispatch({
        type:TOGGLE_RIGHT_SIDE
    });
});

const setTitleRightSide = createAction(SET_TITLE_RIGHT_SIDE);
const setTypeRightSide = createAction(SET_TYPE_RIGHT_SIDE);

export const Type = {
    CREATE_GROUP: 'RightSideContactList/RightSideContactList.js',
    FORWARD_MESSAGE: '',
    CREATE_DIFFUSION_GROUP: ''
}