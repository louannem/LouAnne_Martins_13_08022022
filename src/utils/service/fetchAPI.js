import { userLogin } from "../../features/login";

    /**
     * Connects the user to the app
     * @param {string} e prevent button's default behaviour
     */
 export const login =  (data) => {
     fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response =>  response.json())
      .then(data => {
        return data
      })
      .catch((error) => {
        console.error('Error:', error);
      })    
    
}

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
      })
      .catch((error) => {
        console.error('Error:', error);
      })  
  }
}