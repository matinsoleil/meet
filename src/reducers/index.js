import { combineReducers } from 'redux'
import { contacts } from './contacts'
import { users } from './users'

export default combineReducers({
  contacts,
  users
})