import { CLEAR_CONTACT } from '../../actionstypes'
export const clearContact = () => dispatch => {
    dispatch({
        type: CLEAR_CONTACT,
    })
}
export default clearContact;