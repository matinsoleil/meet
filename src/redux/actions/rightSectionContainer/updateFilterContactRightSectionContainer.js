import { UPDATE_FILTER_CONTACT_RIGHT_SECTION_CONTAINER } from '../../actionstypes'
export const updateFilterContactRightSectionContainer = (listContacts) => dispatch => {
    dispatch({
        type: UPDATE_FILTER_CONTACT_RIGHT_SECTION_CONTAINER,
        payload: listContacts,
    })
}
export default updateFilterContactRightSectionContainer;