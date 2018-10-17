import { CREATE_GROUP } from '../../actionstypes'
export const creacteGroup = (listContacts) => dispatch => {
    dispatch({
        type: CREATE_GROUP,
        payload: listContacts,
    })
}
export default creacteGroup;
