import {createAction} from 'redux-actions';
import { CREATE_GROUP } from '../../actionstypes';
import {store} from './../../store'
import addConversation from '../conversation/addConversation';
import addContact from '../contacts/addContact';
import fetchContact from '../contact/fetchContact';

export const createNewGroup = createAction(CREATE_GROUP,async (newConversation,newGroupElement)=>{
    (newConversation)&&await store.dispatch(addConversation(newConversation));
    (newGroupElement)&&await store.dispatch(addContact(newGroupElement));
    (newGroupElement)&&await store.dispatch(fetchContact(newGroupElement));
    return{
        type:CREATE_GROUP,
        payload:true,
        error:false
    }
});
