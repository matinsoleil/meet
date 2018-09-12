import { FETCH_USER } from '../../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../../api'
import { urlUser } from '../../api/urls'

export const fetchUser = createAction(FETCH_USER, apiGet(urlUser));
export default fetchUser;
