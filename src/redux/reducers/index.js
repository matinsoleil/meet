import { combineReducers } from 'redux'
import { contacts } from './contacts'
import { users } from './users'
import { contact } from './contact'
import { conversation } from './conversation'

export default combineReducers({
  contacts,
  users,
  contact,
  conversation
})