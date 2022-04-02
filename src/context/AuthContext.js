import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const [isAuth, toggleIsAuth] = useState(false);

    const logout = () => {
        toggleIsAuth(false);
    }

    const login = () => {
        toggleIsAuth(true);
    }

    const logData = {
        logged: isAuth,
        name: '',
        email: '',
        logoutFunction: logout,
        loginFunction: login
    }

    return (
        <AuthContext.Provider value={logData}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;