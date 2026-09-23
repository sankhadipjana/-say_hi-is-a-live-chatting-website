import React,{createContext} from 'react'
import cookies from 'js-cookie'
import { useState,useContext } from 'react'

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const initialUserState = cookies.get("jwt") || localStorage.getItem("user");

    //parce the user data
 const [authUser,setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : null);
 
  return (
 <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
 </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
