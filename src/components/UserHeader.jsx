import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../utils/store"
import { selectToken } from "../features/user"
import { editUser } from "../utils/service/fetchAPI"

export default function UserHeader() {
    const login = useSelector(selectToken)
    const dispatch = useDispatch()
    const token = store.getState().user.token

    //Component local data
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    //DOM elements
    const username = document.querySelector('h1 span')
    const editButton = document.querySelector('.edit-button')
    const editForm = document.querySelector('.edit-form')

    const hideName = () => {
        username.style.display = "none"
        editButton.style.display = "none"
        editForm.style.display = "flex"
    }

    const handleSubmit = () => {
        const newName = {
            firstName,
            lastName
        }
        editForm.style.display="none"
        editButton.style.display = "inline-block"
        username.style.display = "inline-block"

        dispatch(editUser(token, newName))
        
    }

    const cancelEdit = () => {
        editForm.style.display="none"
        editButton.style.display = "inline-block"
        username.style.display = "inline-block"
    }

    useEffect(() => {       
        if(login.data !== null) {
            setFirstName(login.data.firstName)
            setLastName(login.data.lastName)
        }
    }, [login])
    
    return(
        <div className="header">
            <h1>Welcome back<br /> <span>{firstName} {lastName} !</span> </h1>

                <form className="edit-form" onSubmit={(e) =>{ 
                    e.preventDefault()
                    handleSubmit()
                    }}>
                    <div className="edit-input-wrapper">
                        <input type="text" id="firstname" placeholder={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
                        <input type="text" id="lastname" placeholder={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                    </div>
                    <div className="edit-button-wrapper">
                        <button className="cancel-button" onClick={(e) =>  { 
                            e.preventDefault()
                            cancelEdit() }
                            }>Cancel</button>
                        <button className="save-button">Save</button>
                    </div>
                </form>

            <button className="edit-button" onClick={ (e) => {
                e.preventDefault()
                hideName()
            }}>Edit Name</button>
            <h2 className="sr-only">Accounts</h2>
        </div>
    )
}

