import { ADD_CONTACT } from '../../actionstypes'
export const addContact = (newContact) => dispatch => {
    dispatch({
        type: ADD_CONTACT,
        payload: newContact,
    })
}
export default addContact