import React, { createContext, useState, useContext } from "react";

// Контекст кошика
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Додати товар у кошик
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Видалити товар із кошика
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
