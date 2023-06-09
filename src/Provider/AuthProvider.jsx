import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const createUserHandler = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleFormLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const handleGithubLogin = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }

    const handleForgetPasswordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const handleUpdateProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const handleLogout = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, setUser, handleFormLogin, handleGoogleLogin, handleGithubLogin, createUserHandler, handleLogout, handleForgetPasswordReset, handleUpdateProfile, loading }

    // console.log(user?.displayName);

    return (
        <>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </>
    );
};

export default AuthProvider;