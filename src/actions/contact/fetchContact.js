import { FETCH_CONTACT } from '../../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../../api'
import { urlContact } from '../../api/urls'
export const fetchContact = createAction(FETCH_CONTACT, apiGet(urlContact));
export default fetchContact;

