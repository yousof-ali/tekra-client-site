"use client"

import { auth } from "@/firebaseAuth/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"

export const AuthProvider = createContext();

const AuthContext = ({children}) => {
  const [user,setUser] = useState(null);
  const [loader,setLoader] = useState(true);

  const createUser = (email,password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
      setUser(currentUser);
      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  },[])

    const value = {
      user,
      loader,
      createUser
    };

    console.log(user)
    return(
        <AuthProvider.Provider value={value}>
          {children}
        </AuthProvider.Provider>
    )
}

export default AuthContext;