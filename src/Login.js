import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { auth } from './firebase.js'
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
function Login() {
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        //some fancy firebase login stuff
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/')
        }).catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();
        //some fancy firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //created new user with email and password
            console.log(auth)
            if (auth) {
                navigate('/')
            }
        }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setemail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setpassword(e.target.value)}
                    />

                    <button type='submit' onClick={signIn} className='login__signInButton'>SignIn</button>
                </form>

                <p>
                    By Signing-In You Agree to Amazons condition of use & sale.
                    Please see our Privacy Notice our cookies Noties and our interest Based App Notice
                </p>

                <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
