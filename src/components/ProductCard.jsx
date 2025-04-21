import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Ціна: {product.price} грн</p>
      <button className={styles.button}>Додати у кошик</button>
    </div>
  );
};

export default ProductCard;
