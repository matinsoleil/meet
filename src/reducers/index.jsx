// Aqui se declara todos los objetos que se van a trabajar en redux
// para declararlos
import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import usuarios from './usuarios'


const App = combineReducers({
  session: sessionReducer,
  login,
  usuario
})

export default App