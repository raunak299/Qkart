import styles from './ProductCard.module.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import useHTTP from '../../custom-hooks/http-hook';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWishList, removeProductFromWishlist } from '../../store/wishlist-action';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductCard(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { token } = useContext(AuthContext);
    const { sendRequest } = useHTTP();
    const dispatch = useDispatch();

    const history = useHistory();
    const location = useLocation();
    const addWishlistHandler = () => {
        !token && history.push("/authentication", { from: location });
        dispatch(addProductToWishList(sendRequest, props.id, token));
        toast.success('Product Wishlisted !!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    const removeWishlistHandler = () => {
        dispatch(removeProductFromWishlist(sendRequest, props.id, token));
        toast.success('Product Not Wishlisted !!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    const { wishListProductsId } = useSelector((state) => (state.wishListData));



    return (
        <div className={styles['product-card-sec']}>

            {wishListProductsId.includes(props.id) && <img src='https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-heart-miscellaneous-kiranshastry-lineal-color-kiranshastry.png' className={styles['wishlist']} alt='wishlist' onClick={removeWishlistHandler} />}
            {wishListProductsId.includes(props.id) && <ToastContainer />}
            {!wishListProductsId.includes(props.id) && <img src="https://img.icons8.com/ultraviolet/40/000000/like--v1.png" alt='wishlist' className={styles['wishlist']} onClick={addWishlistHandler} />}

            <Link to={`product-details/${props.id}`} className={styles['product-card-container']}>
                <div className={styles['product-card']}>
                    <img className={styles['product-card-img']} src={props.img} alt='img' />
                    <div className={styles['product-card-title']}>{props.title}</div>
                    <div className={styles['product-card-price']}>{`Rs.${props.price}`}</div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;