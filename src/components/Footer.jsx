import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "20px 0",
      background: "#fce4ec",
      color: "#333",
      fontSize: "0.9rem",
    }}
  >
    <div style={{ marginBottom: "10px" }}>
      <div style={{ marginBottom: "5px" }}>
        <FaMapMarkerAlt style={{ marginRight: "8px", color: "#e91e63" }} />
        м.Миколаїв, проспект Центральний, 73
      </div>
      <div style={{ marginBottom: "5px" }}>
        <FaPhoneAlt style={{ marginRight: "8px", color: "#e91e63" }} />
        063-123-21-66
      </div>
      <div>
        <FaEnvelope style={{ marginRight: "8px", color: "#e91e63" }} />
        <a
          href="mailto:info@kittystore.ua"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          info@kittystore.ua
        </a>
      </div>
    </div>
    <div>© Всі права захищені 2024</div>
  </footer>
);

export default Footer;


