import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h2 className="text-3xl font-bold underline">Welcome to ShopEasy!</h2>
        <p>Your one-stop shop for the best deals.</p>
        <a href="#shop" className="cta-button">
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default Home;