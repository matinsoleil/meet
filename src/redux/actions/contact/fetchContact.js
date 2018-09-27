import { FETCH_CONTACT } from '../../actionstypes'
import { urlContact } from '../../../api/urls'
import axios from 'axios'

export const fetchContact = ( id ) => dispatch => {
    axios.get(urlContact + '/' +id)
    .then(response => {
        dispatch({
            type: FETCH_CONTACT,
            id: response.data.id,
            name: response.data.name,
            photo: response.data.photo,
            status: response.data.status,
            label: response.data.label,
            dayLastMessage: response.data.dayLastMessage,
            lastMessage: response.data.lastMessage,
            imgContact: response.data.imgContact,
        })
    })
}
export default fetchContact;

