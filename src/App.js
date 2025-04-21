import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import CategoriesPage from "./pages/CategoriesPage";
import { CartProvider } from "./context/CartContext";
import OrderForm from "./pages/OrderForm";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AboutUs from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import ProfilePage from "./pages/ProfilePage"; 

const App = () => (
  <CartProvider>
    <Router>
      <Header />
      <main style={{ background: "#fff", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;
