import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import Address from "./Address/Address";
import styles from './Profile.module.css'
import { useEffect } from "react";


function Profile() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [toggle, setToggle] = useState(true);
    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles['profile-page']}>
                <div className={styles['profile-section']}>
                    <h1 className={styles['profile-sec-heading']}>
                        Profile
                    </h1>
                    <div className={styles['profile-sec-content']}>
                        <div className={styles['profile-tabs']}>
                            <h2 onClick={toggleHandler} className={toggle ? styles['active'] : ''}>PROFILE</h2>
                            <h2 onClick={toggleHandler} className={!toggle ? styles['active'] : ''}>ADDRESS</h2>
                        </div>
                        <div className={styles['profile-tab-contents']}>
                            {toggle && <ProfileInfo />}
                            {!toggle && <Address />}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );

}

export default Profile;