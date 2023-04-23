import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.init';

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
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        signUpUser,
        loginUser,
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