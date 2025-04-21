import React from "react";
import RecommendedProducts from "../components/RecommendedProducts";
import SaleProducts from "../components/SaleProducts";

const Home = () => (
  <div>
    {/* Банер */}
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src="/images/banner.png"
        alt="Банер магазину"
        style={{
          width: "100%",
          maxWidth: "1390px", // Максимальна ширина банера
          height: "446px", // Фіксована висота
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          margin: "0 auto",
        }}
      />
    </div>

    {/* Рекомендовані товари */}
    <h1 style={{ textAlign: "center", color: "#e91e63" }}>Рекомендовані товари</h1>
    <RecommendedProducts />

    {/* Розпродаж */}
    <h1 style={{ textAlign: "center", color: "#e91e63", marginTop: "40px" }}>Розпродаж</h1>
    <SaleProducts />
  </div>
);

export default Home;
