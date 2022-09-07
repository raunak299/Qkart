import React, { useState } from "react";
import AuthContext from "./auth-context";
import { useHistory } from "react-router-dom";

function AuthContextProvider(props) {


    const [token, setToken] = useState(localStorage.getItem('token'));

    const isLoggedIN = !!localStorage.getItem('token');

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const history = useHistory();
    const navigateOnLoginHandler = (path) => {
        history.replace(path);
    }

    const currValue = {
        token,
        login: isLoggedIN,
        setLogin: loginHandler,
        setLogout: logoutHandler,
        navigateOnLogin: navigateOnLoginHandler
    }

    return (
        <AuthContext.Provider value={currValue} >
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;
