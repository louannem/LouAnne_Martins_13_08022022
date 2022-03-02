import Error from '../components/Error'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { logAPI }  from '../utils/service/fetchAPI'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../utils/styles/SignInForm.css'

export default function SignInForm() {
    //Local props to get user's id
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    //Const for error handling
    const [emailErrorMess, setEmailMessage] = useState('')
    const [passwordErrorMess, setPasswordMessage] = useState('')
    const error = useSelector(state => state.user.error)
    
    //Hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = useSelector(state => state.user.token)  

    /**
     * Function to validate the form's inputs
     * @returns boolean 
     */
    const validateForm = () => {
        let emailError
        let passwordError

        if(!email) { emailError = "Please enter a valid email."}
        if(!password) { passwordError = "Please enter a valid password."}

        if(emailError || passwordError) {
            setEmailMessage(emailError)
            setPasswordMessage(passwordError)
            return false
        } else if(!emailError || !passwordError) {
            setEmailMessage('')
            setPasswordMessage('')
        }
        return true
    }
   

    /**
     * Functions & thunks to execute once the form has been submited
     * @param {*} e event
     */
    const handleSubmit = (e) => {      
        e.preventDefault()    
        if(validateForm() && !error) {   dispatch(logAPI(userInfo))  } 
    }
    
    const userInfo = {
        email : email,
        password: password
    }

    useEffect(() => {
        localStorage.clear()
        if(token) { navigate("/profile")}
    }, [token, navigate])

    return(   
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>


            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" onChange={(e) => {setEmail(e.target.value)}} />
                {emailErrorMess && <p className='error-message'>{emailErrorMess}</p>}
            </div>

            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
                {passwordErrorMess && <p className='error-message'>{passwordErrorMess}</p>}
            </div>

            <Error />
            
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
            </div>
            
            <button className="sign-in-button" id='signInButton' >Sign In</button> 
    
            </form>
        </section>
    )
}