import React, { useState } from "react";
import styles from "../styles/Form.module.css";

const RegisterForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName) newErrors.fullName = "Введіть ПІБ.";
    if (!form.age || parseInt(form.age, 10) < 16) {
      newErrors.age = "Реєстрація дозволена лише з 16 років.";
    }
    const usernameRegex = /^[a-zA-Z0-9]{1,20}$/;
    if (!usernameRegex.test(form.username)) {
      newErrors.username = "Логін повинен містити до 20 символів і може включати цифри.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Введіть дійсну адресу електронної пошти.";
    }
    const phoneRegex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Введіть номер телефону у форматі +380 (63) 122-20-65.";
    }
    if (form.password.length < 8) {
      newErrors.password = "Пароль повинен містити не менше 8 символів.";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Паролі не співпадають.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: form.fullName,
          username: form.username,
          email: form.email,
          phone: form.phone,
        })
      );
      alert("Реєстрація успішна!");
      window.location.reload(); // Оновлення сторінки для відображення змін
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Реєстрація</h2>
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
        Вік:
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        {errors.age && <span className={styles.error}>{errors.age}</span>}
      </label>
      <label>
        Логін:
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <span className={styles.error}>{errors.username}</span>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
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
        Пароль:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
      </label>
      <label>
        Повторіть пароль:
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword}</span>
        )}
      </label>
      <button type="submit" className={styles.submitButton}>
        Зареєструватися
      </button>
    </form>
  );
};

export default RegisterForm;
