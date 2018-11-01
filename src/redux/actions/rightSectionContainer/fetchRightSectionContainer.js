import { FETCH_RIGHT_SECTION_CONTAINER } from '../../actionstypes'
export const fetchRightSectionContainer = () => dispatch => {
    dispatch({
        type: FETCH_RIGHT_SECTION_CONTAINER,
    })
}
export default fetchRightSectionContainer;