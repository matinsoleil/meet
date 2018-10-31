import { FETCH_CONTACT } from '../../actionstypes'
import { urlContact } from '../../../api/urls'
import axios from 'axios'
export const fetchContact = (id) => dispatch => {
    axios.get(urlContact + '/' + id)
        .then(response => {
            dispatch({
                type: FETCH_CONTACT,
                payload:response.data
            })
        })
}
export default fetchContact;