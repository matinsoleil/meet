import { handleActions } from 'redux-actions'
import { FETCH_CONTACTS, UPDATE_CONTACTS, ADD_CONTACT } from '../actionstypes'
export const contacts = handleActions({
    [FETCH_CONTACTS + '_FULFILLED']: (state, action) => [...action.payload],
    [UPDATE_CONTACTS]: (state, action) => [...action.payload],
    [ADD_CONTACT]: (state, action) => {
        const createGroup = state
        // createGroup.push(action.payload)

        createGroup.unshift(action.payload)
        
        return [...createGroup]    
    },
}, [])
