import { store } from "../store"
/**
     * Connects the user to the app
     * @param {string} e prevent button's default behaviour
     */
 export const login = (user) => {
    
    fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data => {
          console.log(data)
        return data
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}