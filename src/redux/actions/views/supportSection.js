import {createAction} from 'redux-actions';
import {
    ADD_SELELECTED_CONTACT,
    REMOVE_SELECTED_CONTACT,
    searchActions,
    TOGGLE_SUPPORT_SECTION
} from '../../actionstypes/index';

export const toggleSupportSection = createAction(TOGGLE_SUPPORT_SECTION,(title, type)=>({
    title,type
}));

export const onChangelFilter = createAction(searchActions.SUPPORT_SECTION_FILTER);

export const addSelectContact = createAction(ADD_SELELECTED_CONTACT);

export const removeSelectedContact = createAction(REMOVE_SELECTED_CONTACT);

export const Type = {
    CREATE_GROUP: 'supportContactList/supportContactList.js',
    FORWARD_MESSAGE: '',
    CREATE_DIFFUSION_GROUP: ''
}