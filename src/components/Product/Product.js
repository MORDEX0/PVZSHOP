import React from 'react';
import styles from './Product.module.css';

const Product = ({ name, image, price }) => {
    return (
        <div className={styles.product}>
            <img src={image} alt={name} className={styles.productImage} />
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
            <button className={styles.btn}>Добавить в корзину</button>
        </div>
    );
};

export default Product;