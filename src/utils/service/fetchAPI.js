import {  selectToken, userData, userLogin, userLogout } from "../../features/user";


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
        dispatch(getData(data.body.token))
        localStorage.setItem('token', data.body.token)
      })
      .catch((error) => {
        //To add : error handling
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


export const getProfile = () => {
  return(dispatch, getState) => {
    const token  = selectToken(getState())
    console.log(token)
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
      dispatch(userData(data))
      localStorage.setItem('firstname', data.body.firstName)
      localStorage.setItem('lastname', data.body.lastName)
    })
    .catch( (error) => {
      console.log(error)
    })
   
  }
}