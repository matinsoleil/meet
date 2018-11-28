import { SHOW_SECTION_RIGHT } from '../../actionstypes'
export const showSectionRight = (nameSection) => dispatch => {
    dispatch({
        type: SHOW_SECTION_RIGHT,
        payload: nameSection
    })
}
export default showSectionRight;
