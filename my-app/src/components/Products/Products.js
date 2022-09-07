import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from './Products.module.css';
import Filter from "./Filter/Filter";
import { useState } from "react";



function Products() {

    const [filterTrigger, setFilterTrigger] = useState(false);



    return (
        <div className={styles['products-page']}>
            <Navbar />
            <div className={styles['products-filter-sec']}>
                <Filter setFilterTrigger={setFilterTrigger} filterTrigger={filterTrigger} />
                <div className={styles['products-section']}>
                    <div></div>
                </div>
            </div>
            <div className={styles['footer']}>
                <Footer />
            </div>

        </div>
    );
}

export default Products;