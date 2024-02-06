import React from 'react'
import './Signup.css'
const Login = () => {
  return (
    <div className='contsignup'>
      <h1>Login</h1>
      <div className='signup'>
      <input type='email' placeholder='Enter votre email '/><br/>      
      <input type='password' placeholder='Entrer votre mot de passe '/><br/>
      </div>
      <div className='accept'>
      <input type='checkbox' /> 
      <p>Acceptez les termes et les conditions </p><br/>
      </div>
      <div className='buttonsignup'>
        <button>Login</button>
      </div>
      
    </div>
  )
}

export default Login
