import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
const Signup = () => {
  const [nom,setnom]=useState()
  const [email,setemail]=useState()
  const [password,setpassword]=useState()

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('',{nom,email,password}).then(result=>console.log(result)).catch(err=>(console.log(err)))
  }
  return (
    <div className='contsignup'>
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
      <div className='signup'>
      <input type='text' placeholder='Enter votre nom *' onChange={(e)=>setnom(e.target.value)}/> <br/>
      <input type='text' placeholder='Enter votre prenom *'/> <br/>
      <input type='email' placeholder='Enter votre email *' onChange={(e)=>setemail(e.target.value)}/><br/>
      <input type='email' placeholder='confirmer email *'/><br/>
      <input type='password' placeholder='Entrer votre mot de passe *' onChange={(e)=>setpassword(e.target.value)}/><br/>
      </div>
      <div className='accept'>
      <input type='checkbox' /> 
      <p>Acceptez les termes et les conditions </p><br/>
      </div>

      <div className='buttonsignup'>
        <button type='submit'>SIGN UP</button>
      </div>
      </form>

      
    </div>
  )
}

export default Signup
