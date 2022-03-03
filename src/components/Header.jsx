import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../utils/service/fetchAPI'
import { selectorUserLog, selectState,  } from '../redux/selectors'
import logo from '../assets/argentBankLogo.png'
import '../utils/styles/Header.css'
import { useEffect, useState } from 'react'

/**
 * Application header 
 * @returns HTML component
 */
export default function Header() {
    //Selectors to get store's data
    const loggedIn = useSelector(selectorUserLog())
    const userData = useSelector(selectState).data
    const state = useSelector(selectState)

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
            {state.status === "resolved"  &&
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
            {state.status === "pending" && 
            <Link className="main-nav-item" to='/profile'>
                <i className="fa fa-user-circle"></i>
                Username
            </Link>
            }         

        </nav>
    )
    
}