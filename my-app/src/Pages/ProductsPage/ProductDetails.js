import styles from './ProductDetails.module.css'
import ButtonPrimary from '../../components/ui/ButtonPrimary';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useHTTP from '../../custom-hooks/http-hook';
import loadingImg from '../../images//loading.svg';
import Loading from "../../components/ui/Loading";
import AuthContext from '../../store/auth-context';
import CartContext from '../../store/cart-context';



let productData = '';
function ProductDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const params = useParams();
    const productId = params.productId;

    const { isLoading, sendRequest } = useHTTP();
    useEffect(() => {
        sendRequest({
            url: `/api/products/${productId}`
        }, (data) => { productData = data.product })
    }, [sendRequest, productId]);


    const noProduct = (productData === null || productData.length === 0);

    const { size: availableSizes } = productData;

    const [size, setSize] = useState('s');
    const selectSizeHandler = (e) => {
        const temp = e.target.value;
        setSize(temp);
    }

    // const product = { quantity: 1 };
    const { replaceCartProductList, cartProductList, changeQuantityHandler } = useContext(CartContext);
    const { token } = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();
    // console.log(token);
    const addToCartHandler = () => {
        !token && history.push("/authentication", { from: location });
        const alreadyExists = cartProductList.find((product) => (product['_id'] === productId && product['sizeToBuy'] === size));
        // console.log(alreadyExists);
        alreadyExists && changeQuantityHandler(productId, '+');
        !alreadyExists && sendRequest({
            url: '/api/user/cart',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: token,
            },
            body: JSON.stringify({
                product: { ...productData, sizeToBuy: size }
            })
        }, (data) => (replaceCartProductList(data.cart)))

    }



    return (
        <React.Fragment>
            <Navbar />
            <div className={styles['product-details-page']}>
                {isLoading &&
                    <div className={styles['loading-sec']}>
                        <Loading > <img src={loadingImg} className={styles['loading-sec-img']} alt='Loading !!' />
                        </Loading>
                    </div>}
                {!isLoading && noProduct && <h1 className={styles['no-product-msg']}>No Product Found!!</h1>}
                {!isLoading && !noProduct && <div className={styles['product-details-sec']}>
                    <img src={productData.image} className={styles['product-img']} alt='product-img' />
                    <div className={styles['product-info']}>
                        <h1 className={styles['product-title']}>{productData.title}</h1>
                        <h3 className={styles['product-price']}>{`Rs.${productData.price}`}</h3>
                        <h4 className={styles['product-rating']}>{productData.rating}<i className="fa fa-solid fa-star"></i>  </h4>
                        <div className={styles['product-details-info']}>
                            Designed for the jet-setter in mind, our clothes are ideal blend of comfort and style. Built for the people who’s in demand, this classic design will keep you looking presentable on the go, with a gentle fabric for all-day comfort.
                        </div>
                        <div className={styles['product-size']}>
                            <select name='sizes' defaultValue="" onClick={selectSizeHandler} >
                                <option value="" disabled hidden>Select a size</option>
                                {availableSizes.map((size, index) => (
                                    <option value={size} key={index} >{size}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles['add-to-cart-sec']}>
                            <div onClick={addToCartHandler} className={styles['add-to-cart-btn']}>
                                <ButtonPrimary >Add To Cart</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default ProductDetails;