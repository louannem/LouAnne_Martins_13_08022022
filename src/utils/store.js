import { createStore } from "redux"
import { userReducer } from "../features/login"
import { combineReducers } from "redux"


const reducer = combineReducers({
    login: userReducer
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, reduxDevtools)