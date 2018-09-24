import { FETCH_USER } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlUser } from '../../../api/urls'
const fetchUserAction = createAction(FETCH_USER, apiGet(urlUser));
export const fetchUser = () => dispatch => {
    dispatch(fetchUserAction());
}
export default fetchUser;
