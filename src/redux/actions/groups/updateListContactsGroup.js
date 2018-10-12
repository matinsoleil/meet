import { UPDATE_LIST_CONTACTS_GROUP } from '../../actionstypes'
export const updateListContactsGroup = (listContacts) => dispatch => {
    dispatch({
        type: UPDATE_LIST_CONTACTS_GROUP,
        payload: listContacts,
    })
}
export default updateListContactsGroup;
