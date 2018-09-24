import { FETCH_CONVERSATION } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlConversation } from '../../../api/urls'
const fetchConversationAction = createAction(FETCH_CONVERSATION, apiGet(urlConversation));
export const fetchConversation = () => dispatch => {
    dispatch(fetchConversationAction());
}
export default fetchConversation;
