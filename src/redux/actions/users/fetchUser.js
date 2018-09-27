import { FETCH_USER } from '../../actionstypes'
import { urlUser } from '../../../api/urls'
import axios from 'axios'
export const fetchUser = (id) => dispatch => {
    axios.get(urlUser + '/' + id)
        .then(response => {
            dispatch({
                type: FETCH_USER,
                id: response.data.id,
                name: response.data.name,
                photo: response.data.photo,
                status: response.data.status,
                lastMessage: response.data.lastMessage,
                label: response.data.label,
                dayLastMessage: response.data.dayLastMessage,
                imgUser: response.data.imgUser,
            })
        })
}
export default fetchUser;