import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {  logAPI, getData } from '../utils/service/fetchAPI'
import { selectToken } from '../features/login'
import { useNavigate } from 'react-router-dom'
import '../utils/styles/SignInForm.css'
import { useSelector } from 'react-redux'

export default function SignInForm() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch()

    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/profile`; 
      navigate(path)
    }

    const handleSubmit = (e) => { 
        dispatch(logAPI(userInfo))           
        e.preventDefault()
        routeChange()
        //const getToken = localStorage.getItem('token')
        //dispatch(getData(getToken))

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
        
            <button className="sign-in-button">Sign In</button> 
    
            </form>
        </section>
    )
}