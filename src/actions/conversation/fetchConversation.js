import { FETCH_CONVERSATION } from '../../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../../api'
import { urlConversation } from '../../api/urls'
export const fetchConversation = createAction(FETCH_CONVERSATION, apiGet(urlConversation));
export default fetchConversation;
