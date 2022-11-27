
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Address from "./Address";

import styles from "./ShippingAddress.module.css"


function ShippingAddress(){
    return(
        <div className={styles['shipping-page']}>
            <Navbar/>
            <h2>Shipping Address</h2>
            <Address />
            <div className={styles['footer']}>
            <Footer />
            </div>
        </div>
    );
}

export default ShippingAddress;