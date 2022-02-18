export const intialState = {
    logged: false,
    token : null
}

//Const pour actions
export const LOGGED_IN = "login"
const LOGGED_OUT = "logout"


//Actions
export const userLogin = (data) => ( { type : LOGGED_IN, payload: data})
export const userLogout = () => ({ type : LOGGED_OUT})

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
            token: null
        }
    }

    return state
}


//Selectors
export const selectorUserLog = () => { return (state) => state.login.logged}
export const selectToken = () => { return (state) => state.login}
