import React from 'react';
import logo1 from '../../../images/logo2.png'
import { Link } from 'react-router-dom';
import './Login.css';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import initializeAuthenication from '../../../Firebase/Firebase.init';
import useAuth from '../../../useAuth/useAuth';
import {useLocation, useHistory } from 'react-router-dom';

initializeAuthenication();
const auth = getAuth();

const Login = () => {
    // state
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

// handle form Reload
    const handleFormReload = e =>{
        e.preventDefault()
        console.log(email, password)
        if(password.length < 6) {
            setError('password must be at least 6 character')
        }
        signInUser(email, password)
    }
// sign in user
    const signInUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result)
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

// handle Email Password
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
//   handle another sign in 
    const {SignInUsingGoogle} = useAuth()
    const {SignInUsingGithub} = useAuth()
    
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        SignInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

 return (
        <div className="container register-container mt-3">
        <div className="text-center form-container">
            <img src={logo1} alt=""className="mb-5" />
            <form onSubmit={handleFormReload}>
                <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" className="form-control" required/>
                <br />
                <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" className="form-control" required/>
                <br />
                <p className="text-danger bg-light p-2 form-btn">{error}</p>
                {<button className="form-btn form-control">Login</button>}
                <Link to="/register">New User?</Link>
            </form>
            
            <div className="login-div mb-3"><span>---------------or---------------</span></div>

            <button onClick={handleGoogleLogin} className="form-control another-signIn"> Google</button>
            <button onClick={SignInUsingGithub} className="form-control another-signIn">Github</button>
        </div>
    </div>
    );
};

export default Login;