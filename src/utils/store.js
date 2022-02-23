import { createStore, applyMiddleware } from 'redux'
import { userReducer } from "../features/user"
import { combineReducers } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    user: userReducer
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
))