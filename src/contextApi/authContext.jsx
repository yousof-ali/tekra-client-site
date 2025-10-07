"use client"

import { auth } from "@/firebaseAuth/firebaseConfig";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"

export const AuthProvider = createContext();

const AuthContext = ({children}) => {
  const [user,setUser] = useState(null);
  const [loader,setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email,password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
  };

  const loginEmail = (email,password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth,googleProvider);
   };

  const faceBooklogin = () => {
    setLoader(true);
    return signInWithPopup(auth,facebookProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
      setUser(currentUser);
      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  },[]);

  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  }

    const value = {
      user,
      loader,
      logOutUser,
      createUser,
      googleLogin,
      faceBooklogin,
      loginEmail
    };

    console.log(user)
    return(
        <AuthProvider.Provider value={value}>
          {children}
        </AuthProvider.Provider>
    )
}

export default AuthContext;