import {createAction} from 'redux-actions';
import GenerateId from "../../../lib/helper/generateId";
import {showModal, View} from "../modalBox/modalBox";
import {createNewGroup} from "../groups/groups";
import {store} from "../../store";
import {
    ActionTypes,
    ADD_SELELECTED_CONTACT,
    REMOVE_SELECTED_CONTACT,
    searchActions,
    TOGGLE_SUPPORT_SECTION
} from '../../actionstypes/index';

export const toggleSupportSection = createAction(TOGGLE_SUPPORT_SECTION,(title, type)=>({
    title,type
}));

export const onChangelFilter = createAction(searchActions.SUPPORT_SECTION_FILTER);

export const addSelectContact = createAction(ADD_SELELECTED_CONTACT);

export const removeSelectedContact = createAction(REMOVE_SELECTED_CONTACT);

export const createNewGroupFlow = createAction(ActionTypes.CREATE_NEW_GROUP_FLOW,async (groupsSection)=>{
    const modalCreateGroup = (value) =>{
        const name = value.nameGroup;
        const id = GenerateId.generate();
        const newGroup = {
            'id':id,
            'name':name,
            'conversations':id,
            'countMessage':'',
            "countMessage": '',
            "silence": "0",
            "file": "0",
            "pinner": "0",
            "imgContact": "https://imageog.flaticon.com/icons/png/512/27/27825.png",
            "owner": [
                "1"
            ],
            "typeChat": "2",
            "contactsIds": groupsSection,
        }
        const newConversation = {
            'id':id,
            "contactos": ['U1','9999'],
            "conversation":[],
        }
        store.dispatch(createNewGroup(newConversation,newGroup));
        store.dispatch(toggleSupportSection())
        store.dispatch(showModal());
    }
    await store.dispatch(showModal(
        'Escribe el nombre del grupo',
        {Accept:{name:'Aceptar',action:modalCreateGroup},Cancel:{name:'Cancelar'}},
        View.CREATEGROUP
    ))
});

export const Type = {
    CREATE_GROUP: 'supportContactList/supportContactList.js',
    FORWARD_MESSAGE: '',
    CREATE_DIFFUSION_GROUP: ''
}