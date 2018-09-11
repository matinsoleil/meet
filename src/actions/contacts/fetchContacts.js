import { FETCH_CONTACTS } from './../../constants'
import { createAction } from 'redux-actions'
import { apiGet } from './../../api/contacts'
import { urlContacts } from './../../api/urls'
export const fetchContacts = createAction(FETCH_CONTACTS, apiGet(urlContacts));
export default fetchContacts;

