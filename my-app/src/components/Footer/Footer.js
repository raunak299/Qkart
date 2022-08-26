import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles['footer']}>
            < div class={styles['footer-socialmedia']}>
                <a href="https://www.linkedin.com/in/raunak-raj-167b89134/" target='_blank' rel="noopener noreferrer"><i class="fab fa-brands fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/raunak299" target='_blank' rel="noopener noreferrer"><i class="fab fa-brands fa-github fa-2x"></i></a>
                <a href="mailto:iamraunak299@gmail.com" target='_blank' rel="noopener noreferrer"><i class="fa fa-solid fa-envelope fa-2x"></i></a>
            </div >
        </div>

    );
}

export default Footer;