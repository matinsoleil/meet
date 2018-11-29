import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
    contacts,
    restoreKey as restoreKeyContacts,
    defaultValue as defaultValueContacts
} from './contacts'

import { users } from './users'

// import {
//     conversation,
//     restoreKey as restoreKeyConversation,
//     defaultValue as defaultValueConversation
// } from './conversation'

import { conversationReducer } from './conversation'



import { searchContacts } from './searchContacts'
import { groupsSection } from './groupsSection'
import {
    countryReducer,
    restoreKey as restoreKeyCountry
} from './country'
import { contactSection } from './contactSection'
import { osReducer } from './os'
import { countriesReducer } from './countries'
import { messageCenterReducer } from './messageCenter'
import { customizingReducer } from './customizing'
import { messagesOptionsReducer } from './messagesOptions'

import { messagesReducer } from './messages'

import { alertGeneral } from './alertGeneral'
import { modalBoxReducer } from './modalBox';
import {userReducer} from "./user";
import {viewsReducers} from "./views/";
import {conversationsReducer} from "./conversations";

export const reducers = combineReducers({
  contacts,
  users,
  
  
  searchContacts,
  groupsSection,
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
    user: userReducer,
    views: viewsReducers,
    conversations: conversationsReducer,
    conversation: conversationReducer,
    messages: messagesReducer
});

export const keyToRestore = {
    'contacts': {
        restoreKey: restoreKeyContacts,
        defaultValue: defaultValueContacts,
    },
    // 'conversation': {
    //     restoreKey: restoreKeyConversation,
    //     defaultValue: defaultValueConversation,
    // },
    'country': {
        restoreKey: restoreKeyCountry,
        defaultValue: null
    }
}