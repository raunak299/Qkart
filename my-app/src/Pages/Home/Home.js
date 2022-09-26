import React from "react";
import styles from './Home.module.css';
import heroImage from '../../images/ecommerce3.png'
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";



function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles['home-hero-section']}>
                <div className={styles['home-hero-info']} >
                    <div className={styles['home-hero-heading']}> Fashion of the Times</div >
                    <div className={styles['home-hero-description']}>
                        Designed for the jet-setter in mind, our clothes are ideal blend of comfort and style. Built for the people who’s in demand, this classic design will keep you looking presentable on the go, with a gentle fabric for all-day comfort.
                    </div>
                    <div className={styles['shop-now-btn']}>
                        <Link to='/products'  >
                            <ButtonPrimary>SHOP NOW</ButtonPrimary>
                        </Link>
                    </div>
                </div>

                <img src={heroImage} alt='logo' className={styles['home-hero-image']}></img>

            </div>
            <Footer />
        </React.Fragment>

    );
}

export default Home;
