import { FILE_CONTACTS } from '../../actionstypes'
export const fileContacts = (idContact) => dispatch => {
    dispatch({
        type: FILE_CONTACTS,
        payload: idContact,
    })
}
export default fileContacts;
