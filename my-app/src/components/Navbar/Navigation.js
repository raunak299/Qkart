import React from "react";
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";


const Navigation = () => {



    return (
        <div className={styles['navigation-icons']} >
            <NavLink to='/authentication' activeClassName={styles['active']} >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>
            <i className="fa fa-solid fa-heart"></i>
            <i className="fa fa-solid fa-cart-shopping"></i>
        </div >
    );
}

export default Navigation;