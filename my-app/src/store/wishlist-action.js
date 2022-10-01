import { wishListDataAction } from "./WishList-Slice";


export const addProductToWishList = (sendRequest, id, token) => {
    return (dispatch) => {
        const applyData = (productData) => {
            sendRequest({
                url: `/api/user/wishlist`,
                method: 'POST',
                body: JSON.stringify(
                    productData
                ),
                headers: {
                    'content-type': 'application/json',
                    authorization: token
                }
            }, (data) => {
                // console.log(data);
                const wishListProductsId = data.wishlist.map((product) => (product['_id']));
                dispatch(wishListDataAction.replaceWishList({ wishListProductsId }))
            })
        }

        sendRequest({
            url: `/api/products/${id}`,
        }, (data) => { applyData(data) });
    }
}




export const removeProductFromWishlist = (sendRequest, id, token) => {
    return (dispatch) => {
        const applyData = (productData) => {
            sendRequest({
                url: `/api/user/wishlist/${id}`,
                method: 'DELETE',
                body: JSON.stringify(
                    productData
                ),
                headers: {
                    'content-type': 'application/json',
                    authorization: token
                }
            }, (data) => {
                // console.log(data);
                const wishListProductsId = data.wishlist.map((product) => (product['_id']));
                dispatch(wishListDataAction.replaceWishList({ wishListProductsId }))
            })
        }

        sendRequest({
            url: `/api/products/${id}`,
        }, (data) => { console.log(data); applyData(data) });
    }
}


// export const getProductsFromWishlist = () => {
//     return (dispatch) => {
//         sendRequest({
//             url: '/api/user/wishlist'
//         },)
//     }
// }