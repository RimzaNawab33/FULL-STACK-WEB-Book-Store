import  { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()
 export default function AuthProvider({ children }) {
   const InitialAuth = localStorage.getItem("users");
    const [authUser, setAuthUser] = useState(
        InitialAuth ? JSON.parse(InitialAuth) : undefined
    );
  return (
  <AuthContext.Provider value={[authUser, setAuthUser]}>
    {children}
  </AuthContext.Provider> 
  )
}

export const useAuth = () => useContext(AuthContext);
