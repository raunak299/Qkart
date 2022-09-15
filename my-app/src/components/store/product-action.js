import { useDispatch } from "react-redux";
import { productDataActions } from "./Data-Slice";

export const fetchProduct = (sendRequest) => {
    return (dispatch) => {
        sendRequest({
            url: '/api/products',
        }, (data) => {
            dispatch(productDataActions.replaceProductData(data ? data.products : { productList: [] }));
        })
    }
}





