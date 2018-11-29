import {handleActions} from 'redux-actions';
import {
    ADD_SELELECTED_CONTACT,
    REMOVE_SELECTED_CONTACT,
    searchActions,
    TOGGLE_SUPPORT_SECTION
} from "../../actionstypes/index";

const defaultValues = {
    show: false,
    type: undefined,
    filter:undefined,
    selectedContacts:[]
}

const mapActions = new Map([
    [
        TOGGLE_SUPPORT_SECTION,
        (state,action) => ({...state,show:!state.show,...action.payload}),
    ],
    [
        searchActions.SUPPORT_SECTION_FILTER,
        (state,action) => ({...state,filter:action.payload}),
    ],
    [
        ADD_SELELECTED_CONTACT,
        (state,action) => {
            return {...state,selectedContacts:[...state.selectedContacts,action.payload]}
        },
    ],
    [
        REMOVE_SELECTED_CONTACT,
        (state,action) => ({...state,selectedContacts:state.selectedContacts.filter(e=>{
                return (e !== action.payload);
            })})
    ]
]);

export const supportSectionReducer= handleActions(mapActions,defaultValues) ;