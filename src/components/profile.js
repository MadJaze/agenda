import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './profile.css'

const Profile = () => {

    const {user, isAuthenticated} = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    return (

        isAuthenticated ? <div className="user_profile">

        {/*<pre>{JSON.stringify(user)} </pre> */}
       
        <img src={user.picture} alt={user.name} className="profilePicture"
        onClick={() => logout()}/> 
      {/* <h2>{user.name}</h2>
       <p>{user.email}</p> */}

        

       </div> :<i className="fas fa-user-circle" onClick={() => loginWithRedirect()}></i> 
            
        )
       
    
}

export default Profile
 