export default function UserHeader({firstname, lastname}) {
    return(
        <div className="header">
            <h1>Welcome back<br />{firstname} {lastname}!</h1>
            <button className="edit-button">Edit Name</button>
            <h2 className="sr-only">Accounts</h2>
        </div>
    )
}

