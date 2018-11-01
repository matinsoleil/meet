import { FETCH_CONTACT_SECTION } from '../../actionstypes'
export const fetchContactSection = () => dispatch => {
    dispatch({
        type: FETCH_CONTACT_SECTION,
    })
}
export default fetchContactSection;