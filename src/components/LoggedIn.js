import React, { useEffect, useState } from 'react';

import{Link} from 'react-router-dom';
import "../components/LoggedIn.css";


function LoggedIn() {

    const [user, setUser] = useState('')

    function handleLogOut() {
        

    }
    useEffect(() => {
        setUser(localStorage.getItem('user'))
    },[])

   
  return (
    <div className='main-content'>
        
        <div className="login-content">
        
            {  
                user ? <h1 className='login-h1'>Welcome {user}</h1> : <h1>Loading....</h1>
            }
            <Link to='/'>
            <button className='first-button' onClick={handleLogOut}>Log Out</button>
            </Link>
            
            <button className='second-button' onClick={handleLogOut}>Sign in with a different user</button>
        
      </div>
      
    </div>
  )
}

export default LoggedIn
