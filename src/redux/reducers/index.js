import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { contacts } from './contacts'
import { users } from './users'
import { contact } from './contact'
import { conversation } from './conversation'
import { searchContacts } from './searchContacts'
import { groups } from './groups'

import { countryReducer } from './country'
import { osReducer } from './os'
import { countriesReducer } from './countries'
import { messageCenterReducer } from './messageCenter'
import { customizingReducer } from './customizing'
import { messagesOptionsReducer } from './messagesOptions'

// export const reducers = combineReducers({
  export const reducers = combineReducers({
  contacts,
  users,
  contact,
  conversation,
  searchContacts,
  groups,
  customizing: customizingReducer,
  country: countryReducer,
  countries: countriesReducer,
  os: osReducer,
  messagesOptions: messagesOptionsReducer,
  messageCenterReducer,
  form: formReducer
})