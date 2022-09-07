import React from "react";
import styles from './ButtonPrimary.module.css';

function ButtonPrimary(props) {
    return (
        <div className={styles['btn']}>{props.children}</div>
    );
}

export default ButtonPrimary;