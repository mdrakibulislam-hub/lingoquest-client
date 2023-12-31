import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();

    const createUserHandler = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleFormLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }



    const handleForgetPasswordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const handleUpdateProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const handleLogout = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)

            if (loggedUser) {
                axios.post('https://lingoquest-server-api.vercel.app/jwt', ({ email: loggedUser.email }))
                    .then(data => {

                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, setUser, handleFormLogin, handleGoogleLogin, createUserHandler, handleLogout, handleForgetPasswordReset, handleUpdateProfile, updateUserProfile, loading }

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