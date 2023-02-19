import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth,setOpenDrawer,openDrawer }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;