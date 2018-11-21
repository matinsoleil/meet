import { UPDATE_CONTACTS } from '../../actionstypes'
export const updateContacts = (idContact) => dispatch => {
    dispatch({
        type: UPDATE_CONTACTS,
        payload: idContact,
    })
}
export default updateContacts;


