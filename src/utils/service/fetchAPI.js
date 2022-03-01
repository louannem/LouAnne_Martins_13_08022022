import { dataFetching, dataRejected, userData, userLogin, userLogout } from "../../features/user";

/**
 * Thunk to connect the user to the app
 * @param {*} data user login data collected from the API
 * @returns object fetched data
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
        console.error('Error:', error);
      })  
  }
}



/**
 * Thunk to log out the user & removes their token
 * @returns thunk
 */
export const logout = () => {
  return (dispatch) => {
    dispatch(userLogout())
    localStorage.clear()
  }
}

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
   
  }
  catch(error) {
    store.dispatch(dataRejected(error))
    console.log(error)
  }
  
}

export const getData = (token) => {
  return(dispatch) => {
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    },)
    .then(response => response.json())
    .then( data => {
      dispatch(userData(data.body))
      localStorage.setItem('firstname', data.body.firstName)
      localStorage.setItem('lastname', data.body.lastName)
    })
    .catch( (error) => {
      console.log(error)
    })
   
  }
}


export const editUser = (token, user) => {
  return(dispatch) => {
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