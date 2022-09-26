import { configureStore } from "@reduxjs/toolkit";
import productDataReducer from './Data-Slice';

const store = configureStore({
    reducer: { productData: productDataReducer }
})

export default store;