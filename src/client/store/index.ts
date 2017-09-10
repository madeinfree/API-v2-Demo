import { createStore, combineReducers } from 'redux'
const FormReducer = require('redux-form/lib/reducer').default

const reducerRoot = combineReducers({
  form: FormReducer
})

export default createStore(reducerRoot)
