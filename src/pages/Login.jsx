import SignInForm from "../components/SignInForm";

/**
 * Login page
 * @returns HTML component 
 */
export default function Login() {
    return(
        <main className="main bg-dark login-content">
            <SignInForm />
        </main>
    )
}