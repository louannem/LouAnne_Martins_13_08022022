import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../utils/service/fetchAPI'
import { selectorUserLog, selectUserName,  } from '../features/user'
import logo from '../assets/argentBankLogo.png'
import '../utils/styles/Header.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Header() {
    //Selectors to get store's data
    const loggedIn = useSelector(selectorUserLog())
    const userData = useSelector(selectUserName)

    //Component local data
    const [firstname, setFirstName] = useState('')
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(userData !== null) { setFirstName(userData.firstName) }
    }, [firstname, userData])

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

            {!loggedIn && 
            <div>
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
            }
            {loggedIn  &&
            <div>
                <Link className="main-nav-item" to='/profile'>
                    <i className="fa fa-user-circle"></i>
                    {firstname} 
                </Link>

                <Link to="/" onClick={() => { dispatch(logout())  }} className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
            }           

        </nav>
    )
    
}