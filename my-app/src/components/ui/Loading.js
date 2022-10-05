import React from "react";
import styles from './Loading.module.css'


function Loading(props) {
    return (
        <div className={styles['loading-container']}>{props.children}</div>
    )
}

export default Loading;