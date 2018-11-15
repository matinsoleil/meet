import { UPDATE_CONTACTS } from '../../actionstypes'
export const updateContacts = (updateParam) => dispatch => {
    dispatch({
        type: UPDATE_CONTACTS,
        payload: updateParam,
    })
}
export default updateContacts;
