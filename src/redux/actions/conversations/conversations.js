import {createAction} from 'redux-actions';
import {ActionTypes} from "../../actionstypes";
import GenerateId from "../../../lib/helper/generateId";
import {store} from "../../store";
import {showModal, View} from "../modalBox/modalBox";
import {toggleSupportSection} from "../views/supportSection";

export const updateConversations = createAction(ActionTypes.CONVERSATIONS_UPDATE);
export const removeConversations = createAction(ActionTypes.CONVERSATIONS_REMOVE);
export const addConversation = createAction(ActionTypes.CONVERSATIONS_ADD);

export const createNewGroupFlow = createAction(ActionTypes.CREATE_NEW_CONVERSATION_FLOW,async (groupsSection)=>{
    const modalCreateGroup = (value) =>{
        const newConversation = {
            id:GenerateId.generate(),
            name: value.nameGroup,
            label: 'Better Label 69',
            lastMessageDate: new Date().getTime(),
            lastMessage:'Hi there! , dude',
            unreadMessages:{status:true,messages:null},
            mutted:false,
            file:false,
            pinned:false,
            stored:false,
            banned:false,
            members: groupsSection,
            type:'group',

        };
        store.dispatch(addConversation(newConversation));
        store.dispatch(toggleSupportSection())
        store.dispatch(showModal());
    }
    await store.dispatch(showModal(
        'Escribe el nombre del grupo',
        {Accept:{name:'Aceptar',action:modalCreateGroup},Cancel:{name:'Cancelar'}},
        View.CREATEGROUP
    ))
});