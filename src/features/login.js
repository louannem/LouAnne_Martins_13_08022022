export const intialState = {
    logged: false,
    token : null, 
    data: null
}

//Const pour actions
export const LOGGED_IN = "login"
const LOGGED_OUT = "logout"
const USER_DATA = "userData"


//Actions
export const userLogin = (data) => ( { type : LOGGED_IN, payload: data})
export const userLogout = () => ({ type : LOGGED_OUT})
export const userData = (data) => ({type: USER_DATA, payload: data}) 

//Reducer
export function userReducer(state = intialState, action) {
    if(action.type === LOGGED_IN) {
        return{
            ...state,
            logged : true,
            token: action.payload
        }
    }

    if(action.type === LOGGED_OUT) {
        return {
            ...state,
            logged: false,
            token: null,
            data: null
        }
    }

    if(action.type === USER_DATA) {
        return {
            ...state,
            logged: true,
            data: action.payload
        }
    }
    return state
}


//Selectors
export const selectorUserLog = () => { return (state) => state.login.logged}
export const selectToken = (state) => state.login
