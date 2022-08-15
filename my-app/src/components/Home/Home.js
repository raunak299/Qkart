import React from "react";
import styles from './Home.module.css';
import heroImage from '../../images/ecommerce3.png'
import ButtonPrimary from "../ui/ButtonPrimary";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <React.Fragment>
            <div className={styles['home-hero-section']}>
                <div className={styles['home-hero-info']} >
                    <div className={styles['home-hero-heading']}> Fashion of the Times</div >
                    <div className={styles['home-hero-description']}>
                        Designed for the jet-setter in mind, our clothes are ideal blend of comfort and style. Built for the people who’s in demand, this classic design will keep you looking presentable on the go, with a gentle fabric for all-day comfort.
                    </div>
                    <ButtonPrimary>SHOP NOW</ButtonPrimary>
                </div>

                <img src={heroImage} alt='logo' className={styles['home-hero-image']}></img>

            </div>
            <Footer />
        </React.Fragment>

    );
}

export default Home;
// my - app\src\components\Home\ecommerce2.png