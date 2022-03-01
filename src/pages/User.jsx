import { useNavigate } from "react-router-dom";
import { getProfile } from "../utils/service/fetchAPI";
import Transaction from "../components/Transaction";
import UserHeader from "../components/UserHeader";
import "../utils/styles/User.css"
import { useEffect } from "react";
import { useStore } from "react-redux"


export default function User() { 
    const store = useStore()
    let navigate = useNavigate()

    const loggedUser = store.getState().user.logged
    const state = store.getState().user
    const token = store.getState().user.token
    

    useEffect(() => {
         getProfile(store, token)

        const routeChange = () =>{ 
            let path = `/login`; 
            navigate(path)
          }

        if(!loggedUser) { routeChange()}
    }, [store, token, loggedUser, navigate])
    

    return(
        
        <main className="main bg-dark">
            <UserHeader />

            <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Transaction title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />

        </main>
    )
}