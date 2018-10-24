import { ADD_GROUP } from '../../actionstypes'
export const addGroup = (listContacts) => dispatch => {
    dispatch({
        type: ADD_GROUP,
        payload: listContacts,
    })
}
export default addGroup;
