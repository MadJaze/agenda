import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className= "footer-main-container">

            <h2>Special components (Auth)</h2>

            
                <ul className='icons'>
         
                 <Link to="/test">   <li>  <i class="fas fa-sign-in-alt"></i> Login</li> </Link>
                 <Link to="/login">   <li> <i class="fas fa-sign-out-alt"></i> Logout</li> </Link>
                 <Link to="/???">      <li> <i class="fas fa-question-circle"></i> ???</li> </Link>
                </ul>
          
            
        </div>
    )
}
