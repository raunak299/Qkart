import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from './Products.module.css';
import Filter from "./Filter/Filter";
import { useState } from "react";
import ProductCard from "./ProductCard";
import useHTTP from "../../custom-hooks/http-hook";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product-action";
import Loading from "../../components/ui/Loading";
import loadingImg from '../../images//loading.svg';
import useFilter from '../../custom-hooks/filter-hooks'
import { productDataActions } from "../../store/Data-Slice";



function Products() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productData.productList);
    const featuredProducts = useSelector((state) => state.productData.featuredProducts);
    const filters = useSelector((state) => state.productData.filter);

    const [filterTrigger, setFilterTrigger] = useState(false);
    const { isLoading, sendRequest } = useHTTP();

    useEffect(() => {
        dispatch(fetchProduct(sendRequest));
    }, [dispatch, sendRequest]);

    const { filterProducts } = useFilter();
    useEffect(() => {
        const newProductList = filterProducts(filters, featuredProducts);
        dispatch(productDataActions.replaceProductsList({ newProductList }))
    }, [filters, dispatch, featuredProducts, filterProducts]);
    // console.log(featuredProducts);




    return (
        <div className={styles['products-page']}>


            <Navbar />
            <div className={styles['products-filter-sec']}>
                <Filter setFilterTrigger={setFilterTrigger} filterTrigger={filterTrigger} />
                <div className={styles['products-section']}>

                    {isLoading &&
                        <div className={styles['loading-sec']}>
                            <Loading> <img src={loadingImg} alt='Loading !!' /> </Loading>
                        </div>}
                    {!isLoading && productList.length === 0 && <h3 className={styles['no-products']}>No Products To Display !!</h3>}
                    {!isLoading && productList.length > 0 && productList.map((product) => (
                        <ProductCard
                            key={product['_id']}
                            id={product['_id']}
                            img={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}

                </div>
            </div>


            <div className={styles['footer']}>
                <Footer />
            </div>
        </div>
    );
}

export default Products;