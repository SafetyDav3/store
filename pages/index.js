import React from "react";

const index = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Smelling Products</h2>
        <p>Speakers Dat PLOP</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
    </>
  );
};

export default index;
