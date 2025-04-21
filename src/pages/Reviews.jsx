import React, { useState } from "react";
import styles from "../styles/Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Андрій", text: "Чудовий магазин! Рекомендую." },
    { id: 2, name: "Олена", text: "Замовлення прийшло швидко. Все супер!" },
  ]);
  const [newReview, setNewReview] = useState({ name: "", text: "" });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
      setNewReview({ name: "", text: "" });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Відгуки</h1>

      {/* Список відгуків */}
      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

      {/* Форма для додавання відгуку */}
      <form className={styles.form} onSubmit={handleAddReview}>
        <h2>Залишити відгук</h2>
        <input
          type="text"
          placeholder="Ваше ім'я"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Ваш відгук"
          value={newReview.text}
          onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Додати відгук
        </button>
      </form>
    </div>
  );
};

export default Reviews;
