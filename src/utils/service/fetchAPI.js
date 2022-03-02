import { dataFetching, dataRejected, userData, userLogin, userLogout } from "../../redux/user";

/**
 * Thunk to connect the user to the app
 * @param {*} data user login data collected from the API
 * @returns fonction
 */
export const logAPI = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      .then(response =>  response.json())
      .then(data => {
        dispatch(userLogin(data.body.token))
        localStorage.setItem('token', data.body.token)
      })
      .catch((error) => {
        dispatch(dataRejected('Unknown email and/or password.'))
        console.error('Error:', error)
      })  
  }
}



/**
 * Thunk to log out the user & removes their token
 * @returns fonction
 */
export const logout = () => {
  return (dispatch) => {
    dispatch(userLogout())
    localStorage.clear()
  }
}

/**
 * Service to get user profile if connected
 * @param {*} store redux hook useStore in variable 
 * @param {*} token authorization key in header 
 */
export const getProfile = async (store, token) => {
  store.dispatch(dataFetching())
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
  },)
    const data = await response.json()
    store.dispatch(userData(data.body))
    localStorage.setItem('token', token)
   
  }
  catch(error) {
    store.dispatch(dataRejected(error))
    console.log(error)
  }  
}

/**
 * Thunk to update user profile
 * @param {string} token authorization key in header 
 * @param {object} user User data in body to send 
 * @returns Change confirmation: status, message, and user mail and ID
 */
export const editUser = (token, user) => {
  return(dispatch) => {
    //dispatch(dataFetching())
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body : JSON.stringify(user)
    })
    .then(response => response.json())
    .then (data => dispatch(userData(data.body)))
  }
}