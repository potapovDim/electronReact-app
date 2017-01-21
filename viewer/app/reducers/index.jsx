import {combineReducers, createStore} from 'redux'

import textReducer from './textForFile/'

const rootReducer = combineReducers({
  textReducer
})

export default store = createStore(rootReducer)