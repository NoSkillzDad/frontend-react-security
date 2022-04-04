import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const [isAuth, toggleIsAuth] = useState(false);
    const [userCred, setUserCred] = useState({
        name: '',
        email: ''
    });

    const logout = () => {
        toggleIsAuth(false);
        setUserCred({name: '', email: ''});
    }

    const login = (name, email) => {
        toggleIsAuth(true);
        setUserCred({name: name, email: email});
    }

    const logData = {
        logged: isAuth,
        user: userCred,
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