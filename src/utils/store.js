import { createStore } from "redux"
import { userReducer } from "../features/login"
import { combineReducers } from "redux"


const reducer = combineReducers({
    login: userReducer
})
export const store = createStore(reducer)