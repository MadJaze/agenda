import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './profile.css'

const Profile = () => {

    const {user, isAuthenticated} = useAuth0()

    return (

        isAuthenticated ? <div className="user_profile">

        {/*<pre>{JSON.stringify(user)} </pre> */}
       
        <img src={user.picture} alt={user.name} className="profilePicture"/> 
       <h2>{user.name}</h2>
       <p>{user.email}</p>

        

       </div> : <img src="./user.png" alt="No Profile yet!" className="profilePicture"/> 
            
        )
       
    
}

export default Profile
 