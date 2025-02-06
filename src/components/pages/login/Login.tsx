import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import './Login.css'

const Login = () => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [error,seterror] = useState('')
const [isVisible,setIsVisibile] = useState(false)

const handleVisibility = ()=>{
    setIsVisibile(!isVisible)
}


  return (
    <>

    <div className="form-container">
      <form action="">
      <h1>Login</h1>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container"><input onChange={(e=> setEmail(e.target.value))} type="email" value={email} id='email' placeholder='Enter your email'/></div>
          </div>
      
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container"><input onChange={(e)=> setPassword(e.target.value)} type={ isVisible ? 'text' : 'password'} value={password} id='password' placeholder='Enter your password'/><div className=''  onClick={handleVisibility}>{ isVisible ? <FaRegEye /> : <FaRegEyeSlash />}</div ></div>
          </div>
          <button type='submit'>Log in</button>
      </form>
    </div>


    </>


  )
}

export default Login
