import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectToken } from "../features/login"
import { getProfile } from "../utils/service/fetchAPI"

export default function UserHeader() {
    const login = useSelector(selectToken)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        dispatch(getProfile)
       
        if(login.data !== null) {
            setFirstName(login.data.body.firstName)
            setLastName(login.data.body.lastName)
        }
    }, [login, dispatch])
    
    return(
        <div className="header">
            <h1>Welcome back<br /> {firstName} {lastName} !</h1>
            <button className="edit-button">Edit Name</button>
            <h2 className="sr-only">Accounts</h2>
        </div>
    )
}

