import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ProductCard(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Link to={`product-details/${props.id}`} className={styles['product-card-container']}>
                <div className={styles['product-card']}>
                    <img className={styles['product-card-img']} src={props.img} alt='img' />
                    <div className={styles['product-card-title']}>{props.title}</div>
                    <div className={styles['product-card-price']}>{`Rs.${props.price}`}</div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;