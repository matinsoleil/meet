import { FETCH_CONVERSATION } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlConversation } from '../../../api/urls'
export const fetchConversation = createAction(FETCH_CONVERSATION, apiGet(urlConversation));
export default fetchConversation;
