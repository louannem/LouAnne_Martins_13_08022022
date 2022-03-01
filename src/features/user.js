export const intialState = {
    status: "void",
    logged: false,
    token : null, 
    data: null,
    error: null
}

//Const for loading & error
const FETCHING = "fetching"
const REJECTED = "rejected"

//Const pour actions
export const LOGGED_IN = "login"
const LOGGED_OUT = "logout"
const USER_DATA = "userData"


//Actions
export const userLogin = (data) => ({ type : LOGGED_IN, payload: data})
export const userLogout = () => ({ type : LOGGED_OUT})
export const userData = (data) => ({type: USER_DATA, payload: data}) 

//Actions for loading and error handling
export const dataFetching = () => ({type: FETCHING})
export const dataRejected = (error) => ({ type: REJECTED, payload: error})


//Reducer
export function userReducer(state = intialState, action) {
    if(action.type === FETCHING) {
        if(state.status === "void") {
            return{
                ...state,
                status: 'pending'
            }
        }

        if(state.status === 'rejected') {
            return{
                ...state,
                status: 'pending',
                error: null
            }
        }

        if(state.status === 'resolved') {
            return{
                ...state,
                status: 'updating',
            }
        }
        
    }

    if(action.type === REJECTED) {
        if(state.status === "pending" || state.status === "updating") {
            return{
                ...state,
                status: "rejected",
                error: action.payload
            }
        }
        return {
            ...state,
            status: "rejected",
            logged: false,
            error: action.payload
        }
    }

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
            status: 'void',
            logged: false,
            token: null,
            data: null, error: null
        }
    }

    if(action.type === USER_DATA) {
        return {
            ...state,
            status: 'resolved',
            logged: true,
            data: action.payload
        }
    }
    return state
}


//Selectors
export const selectorUserLog = () => { return (state) => state.user.logged}
export const selectState = (state) => state.user
export const selectError = (state) => state.user.error
export const selectData = (state) => state.user.data
