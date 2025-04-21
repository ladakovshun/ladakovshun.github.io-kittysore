import React from "react";
import { useCart } from "../context/CartContext"; // Імпорт контексту для кошика
import styles from "../styles/RecommendedProducts.module.css";

const products = [
  {
    id: 1,
    name: "Брелок для смартфона",
    description: "Це чудовий брелок, що прикрашає ваш пристрій.",
    price: "150 грн",
    image: "/images/keychain1.png",
  },
  {
    id: 2,
    name: "Навушники Bluetooth",
    description: "Чистий звук, підійде для подорожей.",
    price: "1200 грн",
    image: "/images/headphones1.png",
  },
  {
    id: 3,
    name: "Навушники дротові",
    description: "Для прослуховування музики, підключення дротове.",
    price: "800 грн",
    image: "/images/headphones2.png",
  },
  {
    id: 4,
    name: "Набір наліпок для телефону",
    description: "Додайте унікальності вашому гаджету, за допомогою наліпок.",
    price: "150 грн",
    image: "/images/sticker1.png",
  },
  {
    id: 5,
    name: "Попсокет для телефону",
    description: "Зручний тримач для телефону.",
    price: "200 грн",
    image: "/images/popsocket1.png",
  },
  {
    id: 6,
    name: "Попсокет з собачкою",
    description: "Зручний тримач з милим собакою.",
    price: "250 грн",
    image: "/images/popsocket2.png",
  },
  {
    id: 7,
    name: "Чохол з собакою",
    description: "Чохол на телефон IPhone.",
    price: "400 грн",
    image: "/images/case1.png",
  },
  {
    id: 8,
    name: "Чохол Кітті",
    description: "Чохол на телефон IPhone з бортиками.",
    price: "600 грн",
    image: "/images/case2.png",
  },
  {
    id: 9,
    name: "Чохол з Куромі",
    description: "Зручний чохол для смартфону.",
    price: "500 грн",
    image: "/images/case3.png",
  },
];

const RecommendedProducts = () => {
  const { addToCart } = useCart(); // Використовуємо функцію додавання у кошик

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>{product.price}</p>
          <button
            className={styles.addToCartButton}
            onClick={() => addToCart(product)} // Додаємо товар у кошик
          >
            Додати у кошик
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedProducts;

