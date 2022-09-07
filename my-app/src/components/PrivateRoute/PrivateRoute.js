import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { Redirect } from "react-router-dom";


function PrivateRoute(props) {

    const location = useLocation();
    const login = useContext(AuthContext).login;
    const children = props.children;

    return (
        <React.Fragment>
            {login ? children :
                < Redirect to={{
                    pathname: '/authentication',
                    state: { from: location }
                }}
                />}
        </React.Fragment>
    );
}

export default PrivateRoute;