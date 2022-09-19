import { useCallback } from "react";
import { filterByCategories, filterByRatings, filterBySizes, filterByPrice, sortProducts } from "../store/product-action";


const useFilter = () => {

    const filterProducts = useCallback((filters, featuredProducts) => {
        const { categories: categoriesList, sizes: sizesList, ratings: ratingList, price, sortBy } = filters;
        let newProductList = featuredProducts;
        newProductList = filterByCategories(categoriesList, newProductList);
        newProductList = filterBySizes(sizesList, newProductList);
        newProductList = filterByRatings(ratingList, newProductList);
        newProductList = filterByPrice(price, newProductList);
        newProductList = sortProducts(sortBy, newProductList);
        return newProductList;
    }, []);

    return ({
        filterProducts
    });

}


export default useFilter;