import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignUp = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser === null || currentUser?.emailVerified) {
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = {
        signUpUser,
        logInUser,
        logOutUser,
        updateUserProfile,
        googleSignUp,
        githubSignUp,
        verifyEmail,
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