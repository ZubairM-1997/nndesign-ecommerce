import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/nn_design_logo.jpg'
import './Login.css'
import { auth, db} from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // firebase stuff
    }

    const register = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        //firebase stuff
        createUserWithEmailAndPassword(auth, email, password)
        .then((authentication) => {
            console.log(authentication)
        })
        .catch((error) => {
            alert(error.message)
        })

    }


  return (
    <div className='login'>
    <Link to='/home'>
         <img className="login__logo" src={logo}/>
    </Link>

    <div className="login__container">
        <h1>Sign In</h1>
        <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            <button className='login__registerButton' onClick={register}>Create a new account</button>

        </form>
    </div>
    </div>
  )
}

export default Login