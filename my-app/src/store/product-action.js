
import { productDataActions } from "./Data-Slice";



export const fetchProduct = (sendRequest) => {
    return (dispatch) => {
        sendRequest({
            url: '/api/products',
        }, (data) => {
            dispatch(productDataActions.replaceProductsData(data ? { productData: data.products } : { productData: [] }));
        })
    }
}


export const sortProducts = (sortBy, newProductList) => {
    if (sortBy === 'low') {
        newProductList.sort((product1, product2) => (product1.price - product2.price))
    }
    else if (sortBy === 'high') {
        newProductList.sort((product1, product2) => (product2.price - product1.price))
    }
    return newProductList;
}



const union = (...arr) => {
    const uni = arr.reduce((acc, curr) => {
        return acc.concat(
            curr.filter((el) => !acc.some((ele) => ele._id === el._id))
        );
    }, []);
    return uni;
}


export const filterByCategories = (categoriesList, newProductList) => {
    if (categoriesList.length === 0) {
        return newProductList;
    }
    let tempProductList = [];
    categoriesList.forEach((categoryType) => {
        tempProductList = [...union(
            newProductList.filter((product) => (product.category === categoryType)), tempProductList)
        ];
    });
    return tempProductList;
}



export const filterByRatings = (ratingsList, newProductList) => {
    if (ratingsList.length === 0) {
        return newProductList;
    }
    let tempProductList = [];
    ratingsList.forEach((ratingPoints) => {
        tempProductList = [...newProductList.filter((product) => (Number(product.rating) >= ratingPoints))
        ];
    })
    return tempProductList;
}



export const filterBySizes = (sizesList, newProductList) => {
    if (sizesList.length === 0) {
        return newProductList;
    }
    let tempProductList = [];
    sizesList.forEach((sizeType) => {
        tempProductList = [...union(newProductList.filter((product) => (product.size.includes(sizeType))), tempProductList)];
    })
    return tempProductList;
}


export const filterByPrice = (price, newProductList) => {
    let tempProductList = newProductList.filter((product) => {
        return Number(product.price) <= price
    });
    return tempProductList;
}





