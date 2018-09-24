import { FETCH_CONTACT } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlContact } from '../../../api/urls'

const fetchContactAction = createAction(FETCH_CONTACT, apiGet(urlContact + '/5'));
export const fetchContact = () => dispatch => {
    dispatch(fetchContactAction());
}
export default fetchContact;

