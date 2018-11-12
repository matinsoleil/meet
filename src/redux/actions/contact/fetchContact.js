import { FETCH_CONTACT } from '../../actionstypes'
export const fetchContact = (infoContact) => dispatch => {
    dispatch({
        type: FETCH_CONTACT,
        payload: infoContact
    })
}
export default fetchContact;