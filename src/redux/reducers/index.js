import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  contacts,
  restoreKey as restoreKeyContacts,
  defaultValue as defaultValueContacts
} from './contacts'

import { users } from './users'
import { contact } from './contact'
import {
  conversation,
  restoreKey as restoreKeyConversation,
  defaultValue as defaultValueConversation
} from './conversation'
import { searchContacts } from './searchContacts'
import { groupsSection } from './groupsSection'
import {
  countryReducer,
  restoreKey as restoreKeyCountry
} from './country'
import { rightSection } from './rightSection'
import { contactSection } from './contactSection'
import { osReducer } from './os'
import { countriesReducer } from './countries'
import { messageCenterReducer } from './messageCenter'
import { customizingReducer } from './customizing'
import { messagesOptionsReducer } from './messagesOptions'
import { alertGeneral } from './alertGeneral'
import { modalBoxReducer } from './modalBox';
import {userReducer} from "./user";

export const reducers = combineReducers({
  contacts,
  users,
  contact,
  conversation,
  searchContacts,
  groupsSection,
  rightSection,
  contactSection,
  generalModal: modalBoxReducer,
  customizing: customizingReducer,
  country: countryReducer,
  countries: countriesReducer,
  os: osReducer,
  messagesOptions: messagesOptionsReducer,
  messageCenterReducer,
  form: formReducer,
  alertGeneral,
    user: userReducer
});

export const keyToRestore = {
  'contacts': {
    restoreKey: restoreKeyContacts,
    defaultValue: defaultValueContacts,
  },
  'conversation': {
    restoreKey: restoreKeyConversation,
    defaultValue: defaultValueConversation,
  },
  'country': {
    restoreKey: restoreKeyCountry,
    defaultValue: null
  }
}