import { SHOW_SECTION_GROUPS } from '../../actionstypes'
import { createAction } from 'redux-actions'
import { apiGet } from '../../../api/index'
import { urlContacts } from '../../../api/urls'
const showSectionGroupsIn = createAction(SHOW_SECTION_GROUPS);

export const showSectionGroups = () => dispatch => {
    dispatch(showSectionGroupsIn())
} 
export default showSectionGroups;
