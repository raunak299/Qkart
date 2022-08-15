import React from "react";
import styles from './ButtonSecondary.module.css';

function ButtonSecondary(props) {
    return (
        <div className={styles['btn']}>{props.children}</div>
    );
}

export default ButtonSecondary;