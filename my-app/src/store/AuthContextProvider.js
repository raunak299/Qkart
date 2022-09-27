import React, { useState } from "react";
import AuthContext from "./auth-context";
import { useHistory } from "react-router-dom";

function AuthContextProvider(props) {


    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const isLoggedIN = !!localStorage.getItem('token');

    const loginHandler = (data) => {
        const { token, name, email } = data;
        // console.log(data);
        setToken(token);
        setUserName(name);
        setUserEmail(email);
        localStorage.setItem('token', token);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

    }


    const logoutHandler = () => {
        setToken(null);
        setUserName();
        setUserEmail();
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
    }

    const history = useHistory();
    const navigateOnLoginHandler = (path) => {
        history.replace(path);
    }

    const currValue = {
        token,
        login: isLoggedIN,
        userName,
        userEmail,
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
