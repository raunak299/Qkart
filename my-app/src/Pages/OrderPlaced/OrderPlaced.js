import success from '../../images/success.gif';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './OrderPlaced.module.css'
import { useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';

function OrderPlaced() {

    const { cartProductList, deleteCartHandler } = useContext(CartContext);
    useEffect(() => {
        cartProductList.forEach((product) => {
            deleteCartHandler(product['_id']);
        })
    }, [deleteCartHandler, cartProductList]);

    return (
        <div>
            <Navbar />
            <div className={styles['order-sec']}>
                <div className={styles['order-main-sec']}>
                    <img src={success} alt='success' />
                    <h1>Order Placed</h1>
                </div>
                <div className={styles['footer']}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default OrderPlaced;