import { FETCH_GROUPS } from '../../actionstypes'
export const fetchGroups = (listContacts) => dispatch => {
    dispatch({
        type: FETCH_GROUPS,
        payload: listContacts,
    })
}
export default fetchGroups;
