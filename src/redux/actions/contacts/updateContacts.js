import { UPDATE_CONTACTS } from '../../actionstypes'
export const updateContacts = (listContactsFecth) => dispatch => {
    dispatch({
        type: UPDATE_CONTACTS,
        payload: listContactsFecth,
    })
}
export default updateContacts;
