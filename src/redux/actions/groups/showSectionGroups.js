import { SHOW_SECTION_GROUPS } from '../../actionstypes'
import { createAction } from 'redux-actions'
const showSectionGroupsIn = createAction(SHOW_SECTION_GROUPS, null);

export const showSectionGroups = () => dispatch => {
    dispatch(showSectionGroupsIn())
} 
export default showSectionGroups;
