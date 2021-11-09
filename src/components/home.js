import React from 'react'
import LoginButton from './loginButton'

import LogoutButton from './logoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {

const {isAuthenticated, isLoading} = useAuth0()

if (isLoading) return <h1>Loading...</h1>

    return (
<div>
 
<h1> Main Content </h1>
<h2> Space under construction</h2>
 


</div>
    )
}
