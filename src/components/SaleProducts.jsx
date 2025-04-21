import React from "react";
import { useCart } from "../context/CartContext"; // Підключення контексту кошика
import styles from "../styles/SaleProducts.module.css";

const saleProducts = [
  {
    id: 101,
    name: "Чохол з песиком",
    description: "Милий чохол для IPhone.",
    originalPrice: "400 грн",
    salePrice: "300 грн",
    image: "/images/case1.png",
  },
  {
    id: 102,
    name: "Чохол із Песиком у шляпці",
    description: "Стильний чохол для вашого телефону.",
    originalPrice: "500 грн",
    salePrice: "350 грн",
    image: "/images/case2.png",
  },
  {
    id: 103,
    name: "Чохол із Зайченям",
    description: "Дівчачий чохол для IPhone.",
    originalPrice: "450 грн",
    salePrice: "320 грн",
    image: "/images/case3.png",
  },
];

const SaleProducts = () => {
  const { addToCart } = useCart(); // Функція додавання у кошик

  return (
    <div className={styles.productsGrid}>
      {saleProducts.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.priceContainer}>
            <span className={styles.originalPrice}>{product.originalPrice}</span>
            <span className={styles.salePrice}>{product.salePrice}</span>
          </div>
          <button
            className={styles.addToCartButton}
            onClick={() =>
              addToCart({
                ...product, // Передаємо всі властивості товару
                price: product.salePrice, // Оновлюємо ключ "price" на ціну зі знижкою
              })
            }
          >
            Додати у кошик
          </button>
        </div>
      ))}
    </div>
  );
};

export default SaleProducts;
