import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // Для перевірки авторизації
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { isLoggedIn } = useAuth(); // Перевірка авторизації
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  // Обробка вибору товару
  const handleSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // Сума обраних товарів
  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((total, item) => total + parseInt(item.price, 10), 0);

  // Перенаправлення на сторінку замовлення
  const handleOrder = () => {
    if (selectedItems.length === 0) {
      alert("Оберіть хоча б один товар для замовлення.");
      return;
    }
    navigate("/order", { state: { totalPrice } });
  };

  // Обрати всі товари
  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]); // Зняти вибір з усіх товарів
    } else {
      setSelectedItems(cartItems.map((item) => item.id)); // Обрати всі товари
    }
  };

  return (
    <div className={styles.cartPage}>
      <h1 style={{ textAlign: "center", color: "#e91e63" }}>Кошик</h1>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Ваш кошик порожній.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`${styles.cartItem} ${
                  selectedItems.includes(item.id) ? styles.cartItemSelected : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Видалити
                </button>
              </div>
            ))}
          </div>

          {/* Кнопка "Обрати все" */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              className={styles.selectAllButton}
              style={{
                backgroundColor: "#e91e63",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={handleSelectAll}
            >
              {selectedItems.length === cartItems.length
                ? "Скасувати вибір"
                : "Обрати все"}
            </button>
          </div>

          {/* Сума */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Сума: {totalPrice} грн</h3>
            <button className={styles.orderButton} onClick={handleOrder}>
              Замовити
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
