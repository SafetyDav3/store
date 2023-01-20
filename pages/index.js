import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const index = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers Dat PLOP</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  );
};

export default index;
