import { createSlice } from "@reduxjs/toolkit";

const WishlistDataSlice = createSlice({
    name: 'wishlistData',
    initialState: {
        wishListProductsId: []
    },
    reducers: {
        replaceWishList(state, action) {
            state.wishListProductsId = action.payload.wishListProductsId;

        }

    }
})

export const wishListDataAction = WishlistDataSlice.actions;
export default WishlistDataSlice.reducer;