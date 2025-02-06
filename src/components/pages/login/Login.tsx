import { useState } from 'react'
import './Login.css'

const Login = () => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [error,seterror] = useState('')

  return (
    <>

    <div className="form-container">
      <form action="">
      <h1>Login</h1>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} id='email' placeholder='Enter your email'/>
          </div>
      
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} id='password' placeholder='Enter your password'/>
          </div>
          <button type='submit'>Log in</button>
      </form>
    </div>


    </>


  )
}

export default Login
