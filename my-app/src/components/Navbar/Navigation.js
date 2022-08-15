import React from "react";
// import { useState } from "react";
import styles from './Navigation.module.css'


const Navigation = () => {



    return (
        <div className={styles['navigation-icons']} >
            <i className="fa fa-solid fa-circle-user"></i>
            <i className="fa fa-solid fa-heart"></i>
            <i className="fa fa-solid fa-cart-shopping"></i>
        </div >
    );
}

export default Navigation;