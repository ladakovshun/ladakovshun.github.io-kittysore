import React, { useState } from "react";
import styles from "../styles/Form.module.css";

const LoginForm = ({ onClose }) => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.emailOrUsername) newErrors.emailOrUsername = "Введіть логін або email.";
    if (!form.password) newErrors.password = "Введіть пароль.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose(); // Закриваємо модальне вікно
        }, 2000);
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Авторизація</h2>
      <label>
        Логін або Email:
        <input
          type="text"
          name="emailOrUsername"
          value={form.emailOrUsername}
          onChange={handleChange}
        />
        {errors.emailOrUsername && (
          <span className={styles.error}>{errors.emailOrUsername}</span>
        )}
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
      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? "Завантаження..." : "Увійти"}
      </button>
      {loading && <div className={styles.loadingSpinner}></div>}
      {success && <div className={styles.successMessage}>Успішно!</div>}
    </form>
  );
};

export default LoginForm;

