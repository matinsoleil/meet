import { FETCH_GROUPS } from '../../actionstypes'
export const fetchGroups = (statusInitGroup) => dispatch => {
    dispatch({
        type: FETCH_GROUPS,
        payload: statusInitGroup,
    })
}
export default fetchGroups;
