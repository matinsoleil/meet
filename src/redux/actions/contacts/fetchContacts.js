import { FETCH_CONTACTS } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlContacts } from '../../../api/urls'
export const fetchContacts = createAction(FETCH_CONTACTS, apiGet(urlContacts));
export default fetchContacts;
