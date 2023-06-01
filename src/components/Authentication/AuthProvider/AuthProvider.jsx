import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FirebaseConfig/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (photo, name) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }
    
    const loginByGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginByGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const userInfo = {
        user,
        createUser,
        loginUser,
        updateUserProfile,
        loginByGoogle,
        loginByGithub,
        loading,
        logout
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;