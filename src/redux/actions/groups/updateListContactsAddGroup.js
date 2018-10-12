import { UPDATE_LIST_CONTACTS_ADD_GROUP } from '../../actionstypes'
export const updateListContactsAddGroup = (listContacts) => dispatch => {
    dispatch({
        type: UPDATE_LIST_CONTACTS_ADD_GROUP,
        payload: listContacts,
    })
}
export default updateListContactsAddGroup;