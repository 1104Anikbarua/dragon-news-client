import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import { useEffect } from 'react';

export const NewsContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create user 
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // loginUser 
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = {
        signUpUser,
        logInUser,
        logOutUser,
        user,
        loading,
    }
    return (
        <NewsContext.Provider value={authInfo}>
            {children}
        </NewsContext.Provider>
    );
};

export default AuthProvider;