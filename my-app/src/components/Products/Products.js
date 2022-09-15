import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from './Products.module.css';
import Filter from "./Filter/Filter";
import { useState } from "react";
import ProductCard from "./ProductCard";
import useHTTP from "../custom-hooks/http-hook";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/product-action";
import Loading from "../ui/Loading";
import loadingImg from '../../images//loading.svg';


function Products() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productData.productList);

    const [filterTrigger, setFilterTrigger] = useState(false);
    const { isLoading, sendRequest } = useHTTP();

    useEffect(() => {
        dispatch(fetchProduct(sendRequest));
    }, [dispatch]);

    // console.log(productList);



    return (
        <div className={styles['products-page']}>


            <Navbar />
            <div className={styles['products-filter-sec']}>
                <Filter setFilterTrigger={setFilterTrigger} filterTrigger={filterTrigger} />
                <div className={styles['products-section']}>

                    {isLoading &&
                        <div className={styles['products-sec-loading']}>
                            <Loading> <img src={loadingImg} alt='Loading !!' /> </Loading>
                        </div>}

                    {!isLoading && productList.map((product) => (
                        <ProductCard
                            key={product['_id']}
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