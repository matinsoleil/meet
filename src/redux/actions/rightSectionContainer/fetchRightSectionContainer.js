import { FETCH_RIGHT_SECTION_CONTAINER } from '../../actionstypes'
export const fetchRightSectionContainer = (rightSectionContainer) => dispatch => {
    dispatch({
        type: FETCH_RIGHT_SECTION_CONTAINER,
        payload: rightSectionContainer,
    })
}
export default fetchRightSectionContainer;