import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Для отримання переданих даних і перенаправлення
import { useAuth } from "../context/AuthContext"; // Контекст авторизації
import styles from "../styles/OrderForm.module.css";

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); 

  const totalPrice = location.state?.totalPrice || 0; // Отримуємо передану суму, за замовчуванням 0

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    delivery: "",
    card: "",
  });

  const [errors, setErrors] = useState({});

  // Перевірка авторизації
  useEffect(() => {
    if (!isLoggedIn) {
      alert("Ви повинні увійти в акаунт, щоб здійснити замовлення.");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // Валідація
  const validateForm = () => {
    const newErrors = {};

    // Перевірка ПІБ
    if (!form.fullName) newErrors.fullName = "Введіть ПІБ.";

    // Перевірка телефону (формат: +380 (XX) XXX-XX-XX)
    const phoneRegex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(form.phone)) {
      newErrors.phone =
        "Невірний формат телефону. Введіть у форматі: +380 (63) 122-20-65.";
    }

    // Перевірка адреси (формат: м.Назва, вул.Назва, д.номер, кв.номер)
    const addressRegex =
      /^м\.[А-Яа-яЇїЄєІіҐґA-Za-z\s]+, вул\.[А-Яа-яЇїЄєІіҐґA-Za-z\s]+, д\.\d+[А-Яа-яA-Za-z]?, кв\.\d+$/;
    if (!addressRegex.test(form.address)) {
      newErrors.address =
        "Адреса повинна бути у форматі: м.Київ, вул.Соборна, д.22А, кв.12.";
    }

    // Перевірка картки (MasterCard: 51-55, Visa: починається з 4)
    const cardRegex = /^(?:5[1-5]\d{2}|4\d{3}) \d{4} \d{4} \d{4}$/; // Дозволяє формат із пробілами
    if (!cardRegex.test(form.card)) {
      newErrors.card =
        "Номер картки має бути у форматі MasterCard або Visa (наприклад, 5155 1234 5678 9012).";
    }

    // Перевірка доставки
    if (!form.delivery) newErrors.delivery = "Оберіть службу доставки.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Замовлення на суму ${totalPrice} грн успішно оформлене!`);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.orderForm}>
      <h2>Форма замовлення</h2>
      <label>
        ПІБ:
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
      </label>
      <label>
        Телефон:
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+380 (63) 122-20-65"
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </label>
      <label>
        Адреса:
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="м.Київ, вул.Соборна, д.22А, кв.12"
        />
        {errors.address && <span className={styles.error}>{errors.address}</span>}
      </label>
      <label>
        Служба доставки:
        <select name="delivery" value={form.delivery} onChange={handleChange}>
          <option value="">Оберіть...</option>
          <option value="Нова Пошта">Нова Пошта</option>
          <option value="Укрпошта">Укрпошта</option>
          <option value="Meest">Meest</option>
        </select>
        {errors.delivery && <span className={styles.error}>{errors.delivery}</span>}
      </label>
      <label>
        Картка:
        <input
          type="text"
          name="card"
          value={form.card}
          onChange={handleChange}
          placeholder="5155 1234 5678 9012"
        />
        {errors.card && <span className={styles.error}>{errors.card}</span>}
      </label>
      <button type="submit" className={styles.submitButton}>
        Оплатити
      </button>
    </form>
  );
};

export default OrderForm;
