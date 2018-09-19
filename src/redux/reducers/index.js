import { combineReducers } from 'redux'
import { contacts } from './contacts'
import { users } from './users'
import { contact } from './contact'
import { conversation } from './conversation'


import { countryReducer } from './country';
import { osReducer } from './os';
import { countriesReducer } from './countries';



export default combineReducers({
  contacts,
  users,
  contact,
  conversation
})