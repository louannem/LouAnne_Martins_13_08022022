/**
 * User's bank account on profile page
 * @param {string} title Account name 
 * @param {string} amount Available/current amount in account
 * @param {string} description Amount description
 * @returns HTML component
 */
export default function Transaction({title, amount, description}) {
    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>

            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}