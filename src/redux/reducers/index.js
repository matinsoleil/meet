import { combineReducers } from 'redux'
import { contacts } from './contacts'
import { users } from './users'
import { contact } from './contact'
import { conversation } from './conversation'
import { messageCenterReducer } from './messageCenter'
console.log(messageCenterReducer);
export default combineReducers({
  contacts,
  users,
  contact,
  conversation,
  messageCenterReducer
})