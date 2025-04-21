import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Про магазин</h1>

    {/* Графік роботи */}
    <div className={styles.infoBlock}>
      <FaClock className={styles.icon} />
      <p>Графік роботи: з 09:00 до 20:00. ПН - НД</p>
    </div>

    {/* Адреса */}
    <div className={styles.infoBlock}>
      <FaMapMarkerAlt className={styles.icon} />
      <p>Адреса: м.Миколаїв, проспект Центральний, 73</p>
      <iframe
        title="Мапа магазину"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.7667627229066!2d31.98671097678648!3d46.96627243197511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c964303f6e1d%3A0x922e0b45cf8f5efd!2z0L_RgNC-0YHQvy4g0KbQtdC90YLRgNCw0LvRjNC90YvQuSwgNzMsINCd0LjQutC-0LvQsNC10LIsINCd0LjQutC-0LvQsNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNTQwMDA!5e0!3m2!1sru!2sua!4v1733418184488!5m2!1sru!2sua"
        width="100%"
        height="300"
        style={{ border: "0", borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

    {/* Контакти */}
    <div className={styles.infoBlock}>
      <FaPhone className={styles.icon} />
      <p>Телефон: 063-123-21-66</p>
    </div>
    <div className={styles.infoBlock}>
      <FaEnvelope className={styles.icon} />
      <p>Email: info@kittystore.ua</p>
    </div>
  </div>
);

export default AboutUs;
