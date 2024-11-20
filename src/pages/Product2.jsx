import React from "react";
import "../style/product2.css";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";

const Product2 = () => {
  return (
    <div className="product">
      <div className="product-content-1">
        <div>
          <h1>Scentiments.MNL</h1>
        </div>
        <div className="product-content-1-paragraph">
          <p>
            Step into the past and ignite the stories of history’s most iconic
            figure with our History Figure Collection. Each candle in this
            unique line is inspired by legendary individuals who have left their
            mark on the world. From the scents to design, every detail reflects
            the essence of their legacy, bringing history to life in your home.
          </p>
        </div>
      </div>
      <div className="product-content-2">
        <h1>History Figure Collection</h1>

        <div className="product-content-2-container">
          <div className="container">
            <div>
              <img src={product12} />
            </div>
          </div>
          <div className="container">
            <div>
              <img src={product13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
