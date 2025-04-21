import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Використання контексту авторизації
import { FaUserCircle } from "react-icons/fa"; // Іконка для фото профілю
import styles from "../styles/ProfilePage.module.css";

const ProfilePage = () => {
  const { user } = useAuth(); // Отримання користувача з контексту
  const [currentUser, setCurrentUser] = useState(null);

  // Завантаження користувача з локального збереження
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, [user]);

  if (!currentUser) {
    return (
      <div className={styles.profilePage}>
        <h1>Профіль</h1>
        <p>Ви не увійшли в акаунт.</p>
      </div>
    );
  }

  return (
    <div className={styles.profilePage}>
      <h1>Профіль користувача</h1>
      <div className={styles.profileIcon}>
        <FaUserCircle size={120} color="#e91e63" />
      </div>
      <div className={styles.profileDetails}>
        <p>
          <strong>ПІБ:</strong> {currentUser.fullName}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Логін:</strong> {currentUser.username}
        </p>
        <p>
          <strong>Номер телефону:</strong> {currentUser.phone}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;

