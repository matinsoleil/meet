import { SHOW_SECTION_GROUPS } from '../../actionstypes'
export const showSectionGroups = (listContacts) => dispatch => {
    dispatch({
        type: SHOW_SECTION_GROUPS,
        payload: listContacts,
    })
}
export default showSectionGroups;
