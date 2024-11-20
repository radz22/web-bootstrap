import React from "react";
import "../style/product1.css";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";

const Product1 = () => {
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

        <div className="product-content-2-container-product1">
          <div className="container">
            <div>
              <img src={product7} />
            </div>
            <div>
              <h1 className="title">MOLIERE </h1>
            </div>
          </div>
          <div className="container">
            <div>
              <img src={product8} />
            </div>
            <div>
              <h1 className="title">ST. GEORGE </h1>
            </div>
          </div>

          <div className="container">
            <div>
              <img src={product9} />
            </div>
            <div>
              <h1 className="title">ATHENIAN WARRIOR </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="product-content-3-product1">
        <div className="container">
          <div>
            <img src={product10} />
          </div>
          <div>
            <h1 className="title">MOLIERE </h1>
          </div>
        </div>

        <div className="container">
          <div>
            <img src={product11} />
          </div>
          <div>
            <h1 className="title">VENUS DE MILO </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
