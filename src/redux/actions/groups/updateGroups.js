import { UPDATE_GROUPS } from '../../actionstypes'
export const updateGroups = (listGroups) => dispatch => {
    dispatch({
        type: UPDATE_GROUPS,
        payload: listGroups,
    })
}
export default updateGroups;
