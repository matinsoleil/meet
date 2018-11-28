import {createAction} from 'redux-actions';
import {TOGGLE_SUPPORT_SECTION} from '../../actionstypes';

export const toggleRightSide = createAction(TOGGLE_SUPPORT_SECTION,(title,type)=>({
    title,type
}));

export const Type = {
    CREATE_GROUP: 'SupportContactList/SupportContactList.js',
    FORWARD_MESSAGE: '',
    CREATE_DIFFUSION_GROUP: ''
}