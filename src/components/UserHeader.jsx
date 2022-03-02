import { useEffect, useState } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
//import { store } from "../utils/store"
import { selectState } from "../redux/selectors"
import { editUser } from "../utils/service/fetchAPI"

export default function UserHeader() {
    //Hooks
    const user = useSelector(selectState)
    const dispatch = useDispatch()
    const store = useStore()

    const token = store.getState().user.token
    
    //Component local data
    const [firstName, setFirstName] = useState('Firstname')
    const [lastName, setLastName] = useState('Lastname')

    //DOM elements
    const username = document.querySelector('h1 span')
    const editButton = document.querySelector('.edit-button')
    const editForm = document.querySelector('.edit-form')

    /**
     * Function to hide the user's fistname.lastname onclick
     */
    const hideName = () => {
        username.style.display = "none"
        editButton.style.display = "none"
        editForm.style.display = "flex"
    }

    /**
     * Function to update the user's name
     */
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

    /**
     * Function to cancel an edit by closing the form
     */
    const cancelEdit = () => {
        editForm.style.display="none"
        editButton.style.display = "inline-block"
        username.style.display = "inline-block"
    }

    useEffect(() => {     
        if(user.data !== null) {
            setFirstName(user.data.firstName)
            setLastName(user.data.lastName) 
        }      
    }, [user, token, store])
    
    return(
        <div className="header">
            <h1>Welcome back<br /> {user.status !== "updating" &&<span>{firstName} {lastName} !</span>} </h1>

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

