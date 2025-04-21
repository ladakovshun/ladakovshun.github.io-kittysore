import React, { useState } from "react";
import styles from "../styles/CategoriesPage.module.css";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import SearchBar from "../components/SearchBar";

// Дані про товари
const products = [
  { id: 1, name: "Чохол для телефону", description: "Милий та стильний чохол для Вашого телефону.", price: 300, category: "Чохли", image: "/images/case1.png" },
  { id: 2, name: "Чохол з собакою", description: "Стильний та милий дизайн.", price: 350, category: "Чохли", image: "/images/case2.png" },
  { id: 3, name: "Чохол з Куроміч", description: "Фіолетовий чохол для смартфону.", price: 400, category: "Чохли", image: "/images/case3.png" },
  { id: 4, name: "Навушники бездротові", description: "Чистий звук та гарна підсвітка.", price: 1200, category: "Навушники", image: "/images/headphones1.png" },
  { id: 5, name: "Навушники дитячі (дротові)", description: "Дитячі невеликі навушникі дротові.", price: 700, category: "Навушники", image: "/images/headphones2.png" },
  { id: 6, name: "Навушники блютуз", description: "Висока якість та невелика ціна.", price: 500, category: "Навушники", image: "/images/headphones3.png" },
  { id: 7, name: "Брелок з Куромє", description: "Зручний аксесуар, що можна застосувати будь-де.", price: 150, category: "Брелоки", image: "/images/keychain1.png" },
  { id: 8, name: "Брелок Сігма", description: "Яскравий стиль, сильна киця.", price: 200, category: "Брелоки", image: "/images/keychain2.png" },
  { id: 9, name: "Брелок Камера", description: "Оригінальний дизайн, великий вибір.", price: 280, category: "Брелоки", image: "/images/keychain3.png" },
  { id: 10, name: "Наліпка набір Медведик", description: "Яскравий вигляд, 50 шт. в наборі.", price: 80, category: "Наліпки", image: "/images/sticker1.png" },
  { id: 11, name: "Наліпка набір Котик", description: "Милі котики, що прикрасять гаджети, 80 шт.", price: 120, category: "Наліпки", image: "/images/sticker2.png" },
  { id: 12, name: "Наліпка набір Динозавр", description: "Зелений динозаврик, в наборі 35 шт.", price: 60, category: "Наліпки", image: "/images/sticker3.png" },
  { id: 13, name: "Попсокет з Сінароллом", description: "Комфортний тримач з собакою.", price: 200, category: "Попсокети", image: "/images/popsocket1.png" },
  { id: 14, name: "Попсокет Сінаролл з друзями", description: "Яскравий дизайн з комфортним тримачем.", price: 220, category: "Попсокети", image: "/images/popsocket2.png" },
  { id: 15, name: "Попсокет Кітті", description: "Милий та зручний тримач для телефону.", price: 250, category: "Попсокети", image: "/images/popsocket3.png" },
];

// Категорії
const categories = ["Всі товари", "Чохли", "Навушники", "Брелоки", "Наліпки", "Попсокети"];

const CategoriesPage = () => {
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth(); // Авторизація
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Всі товари");
  const [sortOrder, setSortOrder] = useState("asc"); // Сортування: "asc" або "desc"

  // Сортування товарів за ціною
  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  // Фільтрування товарів за категоріями, пошуком і сортуванням
  const filteredProducts = sortedProducts.filter(
    (product) =>
      (activeCategory === "Всі товари" || product.category === activeCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className={styles.categoriesPage}>
      <h1 style={{ textAlign: "center", color: "#e91e63" }}>Категорії</h1>

      {/* Пошук */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {/* Список категорій */}
      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              activeCategory === category ? styles.activeCategory : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Кнопки сортування */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <button
          onClick={() => setSortOrder("asc")}
          style={{
            backgroundColor: sortOrder === "asc" ? "#e91e63" : "#f8f8f8",
            color: sortOrder === "asc" ? "#fff" : "#333",
            border: "1px solid #ddd",
            padding: "10px 15px",
            margin: "0 5px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Від дешевших до дорожчих
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          style={{
            backgroundColor: sortOrder === "desc" ? "#e91e63" : "#f8f8f8",
            color: sortOrder === "desc" ? "#fff" : "#333",
            border: "1px solid #ddd",
            padding: "10px 15px",
            margin: "0 5px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Від дорожчих до дешевших
        </button>
      </div>

      {/* Товари */}
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price} грн</p>
            <button
              className={styles.addToCartButton}
              onClick={() => handleAddToCart(product)}
            >
              Додати у кошик
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
