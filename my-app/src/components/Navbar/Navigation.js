import React, { useContext } from "react";
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Navigation = () => {

    const authContx = useContext(AuthContext);
    const login = authContx.login;

    return (
        <div className={styles['navigation-icons']} >
            {!login && <NavLink activeClassName={styles.active} to='authentication' >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>}
            {login && <NavLink activeClassName={styles.active} to='profile' >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>}
            <i className="fa fa-solid fa-heart" ></i>
            <i className="fa fa-solid fa-cart-shopping" ></i>
        </div >
    );
}

export default Navigation;