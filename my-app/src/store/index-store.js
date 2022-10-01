import { configureStore } from "@reduxjs/toolkit";
import productDataReducer from './Data-Slice';
import wishlistDataReducer from './WishList-Slice'

const store = configureStore({
    reducer: { productData: productDataReducer, wishListData: wishlistDataReducer }
})

export default store;