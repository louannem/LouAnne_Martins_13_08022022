import Transaction from "../components/Transaction";
import UserHeader from "../components/UserHeader";
import "../utils/styles/User.css"

export default function User() {
    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')
    return(
        <main className="main bg-dark">
            <UserHeader firstname={firstname} lastname={lastname} />

            <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Transaction title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        </main>
    )
}