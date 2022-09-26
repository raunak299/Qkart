import React, { useContext } from "react";
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";


const Navigation = () => {

    const authContx = useContext(AuthContext);
    const login = authContx.login;
    const { cartProductList } = useContext(CartContext);

    return (
        <div className={styles['navigation-icons']} >
            {!login && <NavLink activeClassName={styles.active} to='/authentication' >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>}
            {login && <NavLink activeClassName={styles.active} to='/profile' >
                <i className="fa fa-solid fa-circle-user"></i>
            </NavLink>}
            {/* <i className="fa fa-solid fa-heart" ></i> */}
            {login && <NavLink activeClassName={styles.active} to='/cart' >
                <div className={styles['cartIcon']} >
                    <i className=" fa fa-solid fa-cart-shopping" >
                        <div className={styles['cart-active']}>{cartProductList.length > 0 ? cartProductList.length : ''}</div>
                    </i>
                </div>
            </NavLink>}
        </div >
    );
}

export default Navigation;