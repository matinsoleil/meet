import { FIX_CONTACTS } from '../../actionstypes'
export const fixContacts = (idContact) => dispatch => {
    dispatch({
        type: FIX_CONTACTS,
        payload: idContact,
    })
}
export default fixContacts;
