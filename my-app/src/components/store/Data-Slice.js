import { createSlice } from '@reduxjs/toolkit';

const productDataSlice = createSlice({
    name: 'productData',
    initialState: { productList: [] },

    reducers: {
        replaceProductData(state, action) {
            state.productList = action.payload;
        }
    }
});

export const productDataActions = productDataSlice.actions;
export default productDataSlice;