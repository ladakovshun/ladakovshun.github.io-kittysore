import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Завантаження користувача з localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsRegistering(false);
  };

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#fce4ec",
        color: "#000",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Логотип та меню */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Логотип */}
          <img
            src="/logo.png"
            alt="Логотип"
            style={{
              height: "50px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />

          {/* Меню */}
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              onClick={() => navigate("/categories")}
              style={{ color: "#e91e63", fontWeight: "bold" }}
            >
              Категорії товарів
            </Button>
            <Button
              onClick={() => navigate("/about")}
              style={{ color: "#e91e63", fontWeight: "bold" }}
            >
              Про магазин
            </Button>
            <Button
              onClick={() => navigate("/reviews")}
              style={{ color: "#e91e63", fontWeight: "bold" }}
            >
              Відгуки
            </Button>
          </div>
        </div>

        {/* Пошук */}
        <SearchBar onSearch={(query) => navigate(`/categories?search=${query}`)} />

        {/* Кошик та профіль */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IconButton
            onClick={() => navigate("/cart")}
            style={{ color: "#e91e63", fontSize: "1.5rem" }}
          >
            <FaShoppingCart />
          </IconButton>

          {isLoggedIn ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaUserCircle
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#e91e63",
                }}
                onClick={() => navigate("/profile")}
              />
              <Button
                onClick={handleLogout}
                style={{ color: "#e91e63", fontWeight: "bold" }}
              >
                Вийти
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => setIsModalOpen(true)}
              style={{ color: "#e91e63", fontWeight: "bold" }}
            >
              Увійти
            </Button>
          )}
        </div>
      </Toolbar>

      {/* Модальне вікно */}
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {isRegistering ? (
            <>
              <RegisterForm />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  cursor: "pointer",
                  color: "#e91e63",
                }}
                onClick={toggleForm}
              >
                Уже зареєстровані? Увійти
              </p>
            </>
          ) : (
            <>
              <LoginForm
                onClose={() => {
                  setIsLoggedIn(true);
                  setUser(JSON.parse(localStorage.getItem("user")));
                  handleModalClose();
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  cursor: "pointer",
                  color: "#e91e63",
                }}
                onClick={toggleForm}
              >
                Не зареєстровані?
              </p>
            </>
          )}
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;

