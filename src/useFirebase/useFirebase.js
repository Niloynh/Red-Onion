
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged,signOut} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import initializeAuthenication from '../Firebase/Firebase.init';


initializeAuthenication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const auth = getAuth()

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    
    const SignInUsingGoogle = () =>{
        return signInWithPopup(auth, GoogleProvider)
        .catch(error =>{
            setError(error.message)
        })
    }
    const SignInUsingGithub = () => {
        signInWithPopup(auth, GithubProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
            setError('');
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user) {
                setUser(user)
            }
        })
    },[])

    const userSignOut = () =>{
        signOut(auth)
        .then(result => { 
            setUser({})
        })
    }

    return {
        user,
        error,
        SignInUsingGoogle,
        SignInUsingGithub,
        userSignOut
    }
}

export default useFirebase;