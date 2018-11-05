import { UPDATE_FILTER_CONTACT_SECTION } from '../../actionstypes'
export const updateFilterContactSection = (listContacts) => dispatch => {
   dispatch({
        type: UPDATE_FILTER_CONTACT_SECTION,
        payload: listContacts,
    })
}
export default updateFilterContactSection;