import { FETCH_CONTACT } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlContact } from '../../../api/urls'

export const fetchContact = ( id ) => dispatch => {
    console.log( id );
    const fetchContactActionUUU = createAction(FETCH_CONTACT, apiGet(urlContact + '/' +id));
    dispatch(fetchContactActionUUU());
}
export default fetchContact;

