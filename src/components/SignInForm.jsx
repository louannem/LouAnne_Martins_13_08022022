import '../utils/styles/SignInForm.css'

export default function SignInForm() {
    const data = {
        email : 'steve@rogers.com',
        password: 'password456'
    }

    /**
     * Connects the user to the app
     * @param {string} e prevent button's default behaviour
     */
    const login = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
              console.log(data)
            return true
          })
          .catch((error) => {
            console.error('Error:', error);
          })
    }

    
    return(
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>


            <form>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" />
            </div>

            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" />
            </div>

            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
            </div>
        
            <button onClick={login} className="sign-in-button">Sign In</button> 
    
            </form>
        </section>
    )
}