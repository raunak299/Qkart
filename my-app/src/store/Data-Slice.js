import { createSlice } from '@reduxjs/toolkit';


const productDataSlice = createSlice({
    name: 'productData',
    initialState: {
        productList: [], featuredProducts: [], maxPrice: 0, minPrice: Number.MAX_SAFE_INTEGER,
        filter: {
            sortBy: '',
            price: 0,
            categories: [],
            sizes: [],
            ratings: [],
            clearFilter: false,
        }
    },

    reducers: {
        replaceProductsData(state, action) {
            state.productList = action.payload.productData;
            state.featuredProducts = action.payload.productData;
            const maxPrice = state.featuredProducts.reduce((max, product) => (max = Math.max(product.price, max)), 0);
            const minPrice = state.featuredProducts.reduce((min, product) => (min = Math.min(product.price, min)), Number.MAX_SAFE_INTEGER);
            state.filter.price = maxPrice;
            state.minPrice = minPrice;
            state.maxPrice = maxPrice;
        },

        replaceProductsList(state, action) {
            state.productList = action.payload.newProductList;
        },

        resetFilters(state) {
            state.filter.clearFilter = !(state.filter.clearFilter);
            state.filter.price = state.maxPrice;
            state.filter.sortBy = '';
            state.filter.categories = [];
            state.filter.sizes = [];
            state.filter.ratings = [];
        },

        sortProducts(state, action) {
            state.filter.sortBy = action.payload.sortIn;
        },

        filterByPrice(state, action) {
            state.filter.price = action.payload.price;
        },

        filterByCategories(state, action) {
            const category = action.payload.category;

            const categoryList = state.filter.categories;
            state.filter.categories = categoryList.includes(category) ? categoryList.filter((categoryType) => (
                categoryType !== category)) : [...categoryList, category]
        },


        filterBySizes(state, action) {
            const size = action.payload.size;
            const sizeList = state.filter.sizes;

            state.filter.sizes = sizeList.includes(size) ? sizeList.filter((sizeType) => (
                sizeType !== size)) : [...sizeList, size];
        },


        filterByRatings(state, action) {
            const rating = action.payload.rating;
            state.filter.ratings = [rating];
        },



    }
});

export const productDataActions = productDataSlice.actions;
export default productDataSlice.reducer;