import { UPDATE_FILTER_CONTACTS_ADD_GROUP } from '../../actionstypes'
export const updateFilterContactsAddGroup = (listContacts) => dispatch => {
    dispatch({
        type: UPDATE_FILTER_CONTACTS_ADD_GROUP,
        payload: listContacts,
    })
}
export default updateFilterContactsAddGroup;
