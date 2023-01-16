import styles from "./Cart.module.css";
import React, { useContext, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import useHTTP from "../../custom-hooks/http-hook";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ButtonSecondary from '../../components/ui/ButtonSecondary';

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    cartProductList,
    replaceCartProductList,
    changeQuantityHandler,
    deleteCartHandler,
  } = useContext(CartContext);

  const { token } = useContext(AuthContext);
  const { sendRequest } = useHTTP();
  useEffect(() => {
    sendRequest(
      {
        url: "/api/user/cart",
        headers: {
          authorization: token,
        },
      },
      (data) => {
        replaceCartProductList(data.cart);
      }
    );
  }, [sendRequest, token, replaceCartProductList]);

  const changeqtyHandler = (e) => {
    const id = e.target.value;
    const innerText = e.target.innerText;
    changeQuantityHandler(id, innerText);
  };

  const deleteHandler = (e) => {
    const id = e.target.value;
    deleteCartHandler(id);
    toast.success("Product Deleted !!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const finalTotalPrice = cartProductList.reduce(
      (tempTotalPrice, product) => {
        const { price, qty } = product;
        return tempTotalPrice + Number(price) * qty;
      },
      0
    );
    setTotalPrice(finalTotalPrice);
  }, [cartProductList]);
  // console.log(totalPrice);

  return (
    <React.Fragment>
      <Navbar />
      <div className={styles["cart-page"]}>
        {(!cartProductList || cartProductList.length === 0) && (
          <h1 className={styles["no-product-msg"]}>No item in cart!!</h1>
        )}
        {cartProductList?.length > 0 && (
          <div className={styles["cart-section"]}>
            <div className={styles["cart-product-list"]}>
              {cartProductList.map((product) => (
                <div
                  className={styles["cart-product"]}
                  key={`${product["_id"]}&${product["sizeToBuy"]}`}
                >
                  <Link to={`product-details/${product["_id"]}`}>
                    <img src={product.image} alt="img" loading="lazy" />
                  </Link>
                  <div className={styles["product-detail"]}>
                    <div>{product.title}</div>
                    <div>
                      Price: <span>{product.price}</span>
                    </div>
                    <div>
                      Size: <span>{product.sizeToBuy}</span>
                    </div>
                    <div className={styles["add-to-cart-sec"]}>
                      <div className={styles["change-quantity"]}>
                        <button
                          value={product["_id"]}
                          onClick={changeqtyHandler}
                        >
                          -
                        </button>
                        <div>{product.qty}</div>
                        <button
                          value={product["_id"]}
                          onClick={changeqtyHandler}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      value={product["_id"]}
                      onClick={deleteHandler}
                      className={styles["delete-product"]}
                    >
                      Delete
                    </button>
                    {/* <ToastContainer /> */}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles["cart-summary"]}>
              <div>Cart Summary</div>

              {cartProductList.map((product) => (
                <div
                  className={styles["product-in-cart"]}
                  key={`${product["_id"]}&${product["sizeToBuy"]}`}
                >
                  <div>{`${product.title} (${product.sizeToBuy})`}</div>
                  <div>{`${product.price} * ${product.qty}`}</div>
                </div>
              ))}

              <div className={styles["total-price"]}>
                <div>TOTAL</div>
                <div>{`Rs ${totalPrice}`}</div>
              </div>
              <div>
                {/* <Link to='/orderPlaced' className={styles['checkout-btn']}>
                                <ButtonPrimary>CHECKOUT</ButtonPrimary>
                            </Link> */}
                <Link to="/shipping" className={styles["checkout-btn"]}>
                  <ButtonPrimary>CHECKOUT</ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
      <div className={styles["footer"]}>
        <Footer />
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Cart;
