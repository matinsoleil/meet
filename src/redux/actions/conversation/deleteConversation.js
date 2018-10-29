import { DELETE_CONVERSATION } from '../../actionstypes'
export const deleteConversation = (listContactsFecth) => dispatch => {
    dispatch({
        type: DELETE_CONVERSATION,
        // payload: listContactsFecth,
    })
}
export default deleteConversation;
