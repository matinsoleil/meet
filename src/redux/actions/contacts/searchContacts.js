import { SEARCH_CONTACTS } from '../../actionstypes'
export const searchContacts = (listContactsFecth) => dispatch => {
    dispatch({
        type: SEARCH_CONTACTS,
        searchContacts: listContactsFecth,
    })
}
export default searchContacts;
