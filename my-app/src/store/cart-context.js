import { createContext } from "react";

const CartContext = createContext({
    cartProductList: [],
    replaceCartProductList: (data) => { },
    deleteCartHandler: (data) => { },
    changeQuantityHandler: (id, innerText) => { },
});

export default CartContext;