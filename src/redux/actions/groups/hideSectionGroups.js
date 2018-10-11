import { HIDE_SECTION_GROUPS } from '../../actionstypes'
import { createAction } from 'redux-actions'
const hideSectionGroupsIn = createAction(HIDE_SECTION_GROUPS, null);

export const hideSectionGroups = () => dispatch => {
    dispatch(hideSectionGroupsIn())
} 
export default hideSectionGroups;
