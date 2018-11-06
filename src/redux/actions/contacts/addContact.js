import { ADD_CONTACT } from '../../actionstypes'
export const addContact = (newContact) => dispatch => {
    dispatch({
        type: ADD_CONTACT,
        payload: newContact,
        // meta :'wait',
        // error: 'false',
    })
}
export default addContact