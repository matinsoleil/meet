import { ADD_CONVERSATION } from '../../actionstypes'
export const addConversation = (newConversation) => dispatch => {
    dispatch({
        type: ADD_CONVERSATION,
        payload: newConversation,
    })
}
export default addConversation;




