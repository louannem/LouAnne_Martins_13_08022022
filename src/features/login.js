export const intialState = {
    logged: false,
    token : null
}

//Const pour actions
const LOGGED_IN = "login"
const LOGGED_OUT = "logout"


//Actions
export const userLogin = (data) => ( { type : LOGGED_IN, payload: data})
export const userLogout = () => ({ type : LOGGED_OUT})

//Reducer
export function userReducer(state = intialState, action) {
    if(action.type === LOGGED_IN) {
        return{
            ...state,
            logged : !state.logged
        }
    }

    if(action.type === LOGGED_OUT) {
        return {
            ...state,
            logged: !state.logged
        }
    }

    return state
}
