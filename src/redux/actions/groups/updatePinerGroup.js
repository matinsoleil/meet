import { UPDATE_PINER_GROUP } from '../../actionstypes'
export const updatePinerGroup = (listContacts) => dispatch => {
    dispatch({
        type: UPDATE_PINER_GROUP,
        payload: listContacts,
    })
}
export default updatePinerGroup;
