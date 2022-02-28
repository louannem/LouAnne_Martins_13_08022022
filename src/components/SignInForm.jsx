import { useDispatch } from 'react-redux'
import {  useState } from 'react'
import { logAPI }  from '../utils/service/fetchAPI'
import { useNavigate } from 'react-router-dom'
import '../utils/styles/SignInForm.css'

export default function SignInForm() {
    //Local props to get user's id
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const loginButton = document.getElementById('signInButton')
    
    const dispatch = useDispatch()
  

    /**
     * hook to redirect the user once connected
     */
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/profile`; 
      navigate(path)
    }

    /**
     * Functions & thunks to execute once the form has been submited
     * @param {*} e event
     */
    const handleSubmit = (e) => { 
        e.preventDefault()
        dispatch(logAPI(userInfo))           

        loginButton.innerText = "Connexion..."

        setTimeout(() => {
            routeChange()
        }, 1000);
    }

    

    const userInfo = {
        email : email,
        password: password
    }

    return(
        
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>


            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" onChange={(e) => {setEmail(e.target.value)}} />
            </div>

            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>

            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
            </div>
        
            <button className="sign-in-button" id='signInButton'>Sign In</button> 
    
            </form>
        </section>
    )
}