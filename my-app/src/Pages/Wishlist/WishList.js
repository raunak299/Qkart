import styles from './WishList.module.css';
import ProductCard from '../Products/ProductCard';
import loadingImg from '../../images//loading.svg';
import { useSelector } from 'react-redux';
import Loading from '../../components/ui/Loading';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useHTTP from '../../custom-hooks/http-hook';
import AuthContext from '../../store/auth-context';

function Wishlist() {

    const { wishListProductsId } = useSelector((state) => (state.wishListData));
    const { token } = useContext(AuthContext);

    const { isLoading, sendRequest } = useHTTP();
    const [wishListProducts, setWishlistProducts] = useState([]);
    useEffect(() => {
        sendRequest({
            url: '/api/user/wishlist',
            headers: {
                authorization: token
            }
        }, (data) => (setWishlistProducts(data.wishlist)));
    }, [wishListProductsId, sendRequest, token])


    return (
        <React.Fragment>
            <Navbar />
            <div className={styles['wishlist-page']}>
                <div className={styles['products-section']}>
                    {isLoading &&
                        <div className={styles['loading-sec']}>
                            <Loading> <img src={loadingImg} alt='Loading !!' /> </Loading>
                        </div>}
                    {!isLoading && wishListProducts.length === 0 && <h3 className={styles['no-products']}>No Products To Display !!</h3>}
                    {!isLoading && wishListProducts.length > 0 && wishListProducts.map((product) => (
                        <ProductCard
                            key={product['_id']}
                            id={product['_id']}
                            img={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
                <div className={styles['footer']}>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Wishlist;