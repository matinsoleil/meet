import { SHOW_SECTION_GROUPS } from '../../actionstypes'
export const showSectionGroups = () => dispatch => {
    dispatch({
        type: SHOW_SECTION_GROUPS
    })
}
export default showSectionGroups;
