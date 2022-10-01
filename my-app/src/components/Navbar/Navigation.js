import React, { useContext } from "react";
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navigation = () => {

    const authContx = useContext(AuthContext);
    const login = authContx.login;
    const { cartProductList } = useContext(CartContext);
    const { wishListProductsId } = useSelector((state) => (state.wishListData));

    return (
        <div className={styles['navigation-icons']} >
            {!login && <NavLink activeClassName={styles.active} to='/authentication' >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>}
            {login && <NavLink activeClassName={styles.active} to='/profile' >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>}
            {login && <NavLink to='/wishlist'>
                <div className={styles['icon-container']} >
                    <i className="fa fa-solid fa-heart" >
                        {wishListProductsId.length > 0 && <div className={styles['icon-active']}>
                            <div>{wishListProductsId.length}</div>
                        </div>}
                    </i>
                </div>
            </NavLink>}
            {login && <Link to='/cart' >
                <div className={styles['icon-container']} >
                    <i className=" fa fa-solid fa-cart-shopping" >
                        {cartProductList.length > 0 && <div className={styles['icon-active']}>
                            <div>{cartProductList.length > 0 ? cartProductList.length : ''}</div>
                        </div>}
                    </i>
                </div>
            </Link>}
        </div >
    );
}

export default Navigation;