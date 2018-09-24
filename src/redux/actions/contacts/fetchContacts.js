import { FETCH_CONTACTS } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlContacts } from '../../../api/urls'
const fetchContactsAction = createAction(FETCH_CONTACTS, apiGet(urlContacts));

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsAction())
} 
export default fetchContacts;
