import { createStore, applyMiddleware } from 'redux'
import { userReducer } from "../features/login"
import { combineReducers } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    login: userReducer
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
))