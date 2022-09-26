import React from "react";

const AuthContext = React.createContext(
    {
        token: '',
        login: false,
        setLogin: (token, path) => { },
        setLogout: () => { },
        navigateOnLogin: () => { }
    }
)

export default AuthContext;