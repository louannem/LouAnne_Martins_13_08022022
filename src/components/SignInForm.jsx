import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../utils/service/fetchAPI'
import { store } from '../utils/store'
import { userLogin } from '../features/login'
import { useNavigate } from 'react-router-dom'
import '../utils/styles/SignInForm.css'

export default function SignInForm() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch()

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/profile`; 
      navigate(path);
    }

    const userInfo = {
        email : email,
        password: password
    }

    const isLogged = store.getState()


    return(
        
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>


            <form>
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
        
            <button onClick={(e)=> {
                e.preventDefault()
                store.dispatch(userLogin())               
                login(userInfo)
                routeChange()
                console.log(isLogged)
            }} className="sign-in-button">Sign In</button> 
    
            </form>
        </section>
    )
}