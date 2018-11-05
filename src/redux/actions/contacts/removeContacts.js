import { REMOVE_CONTACTS } from '../../actionstypes'
export const removeContacts = (idContact) => dispatch => {
    dispatch({
        type: REMOVE_CONTACTS,
        payload: idContact,
    })
}
export default removeContacts;
