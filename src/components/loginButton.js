import { useAuth0 } from '@auth0/auth0-react'
import './profile.css'

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    return (
        <button onClick={() => loginWithRedirect()} className="userButton">
            
        Login
               </button>
    )
}

export default LoginButton
