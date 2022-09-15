import styles from './ProductCard.module.css'

function ProductCard(props) {
    return (
        <div className={styles['product-card']}>
            <img className={styles['product-card-img']} src={props.img} alt='img' />
            <div className={styles['product-card-title']}>{props.title}</div>
            <div className={styles['product-card-price']}>{`Rs.${props.price}`}</div>
        </div>
    );
}

export default ProductCard;