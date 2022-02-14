import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { store } from '../utils/store'
import { userLogout } from '../features/login'
import logo from '../assets/argentBankLogo.png'
import '../utils/styles/Header.css'
import { useSelector } from 'react-redux'

export default function Header() {
    const log = store.getState().login
    const loggedIn = useSelector((state) => state.login.logged)
    console.log(loggedIn)
    const dispatch = useDispatch()

    return(
        <nav className="main-nav">
        <Link to="/" className="main-nav-logo" >
            <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            {!loggedIn && 
            <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
            }
            {loggedIn  &&
            <Link to="/" onClick={() => { store.dispatch(userLogout())  }} className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
            }           
            

        </div>
        </nav>
    )
    
}