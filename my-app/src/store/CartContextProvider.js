
import { useCallback, useContext, useState } from "react";
import useHTTP from "../custom-hooks/http-hook";
import AuthContext from "./auth-context";
import CartContext from "./cart-context";


function CartContextProvider(props) {


    const { token } = useContext(AuthContext);
    const { sendRequest } = useHTTP();
    const [cartProductList, setCartProductList] = useState([]);

    const replaceCartProductList = useCallback((data) => {
        setCartProductList(data);
    }, []);

    const changeQuantityHandler = (id, innerText) => {
        let type;
        if (innerText === '+') {
            type = 'increment';
        }
        else if (innerText === '-') {
            const [product] = cartProductList.filter((product) => (product['_id'] === id));
            if (product.qty > 1) {
                type = 'decrement';
            }
        }
        sendRequest({
            url: `/api/user/cart/${id}`,
            method: 'POST',
            headers: {
                authorization: token
            },
            body: JSON.stringify({
                action: { type }
            })
        }, (data) => (replaceCartProductList(data.cart)));
    }


    const deleteCartHandler = (id) => {
        sendRequest({
            url: `/api/user/cart/${Number(id)}`,
            method: 'DELETE',
            headers: {
                authorization: token
            }
        }, (data) => {
            replaceCartProductList(data.cart)
        })
    }



    // const initialState = {
    //     cartProductList,
    // }


    return (
        <CartContext.Provider value={{ cartProductList, replaceCartProductList, changeQuantityHandler, deleteCartHandler }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;