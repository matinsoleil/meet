import { FETCH_USER } from '../../../constants/index'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlUser } from '../../../api/urls'

export const fetchUser = createAction(FETCH_USER, apiGet(urlUser));
export default fetchUser;
