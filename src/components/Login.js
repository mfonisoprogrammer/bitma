import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/Login.css";

function Login() {

        const [user, setUser] = useState('');    

        function changeUser(e) {
            setUser(e.target.value)
        }
    
    function formSubmit(e) {
        e.preventDefault()
       
    }
    localStorage.setItem('user',user);
    console.log(localStorage)
  return (
    <div className='contents'>
        <div className="main-content">
            <h1 className='brand-name'>BITMAMA</h1>
            
            <form className='form' onSubmit={formSubmit}>
                <div className="circle"></div>
                <div className="circle1"></div>
                <h1 className='form-h1'>Login</h1>
                <h3 className='form-h3'>Welcome</h3>
                    <label className='label'>Enter Username</label>
                   <input className='first-input' type="text" placeholder='Username...' 
                   value={user} onChange={changeUser} required  /> 
                  <Link to='/dashboard'>
                   <input className='first-input2' type="submit" value="Log In" />
                   </Link>
            </form>
        </div>
      
    </div>
  )
}

export default Login
