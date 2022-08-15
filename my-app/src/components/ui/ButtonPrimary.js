import React from "react";
import styles from './ButtonPrimary.module.css';

function Button(props) {
    return (
        <div className={styles['btn']}>{props.children}</div>
    );
}

export default Button;