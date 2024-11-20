import React from "react";
import "../style/product.css";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

const Product = () => {
  return (
    <div className="product">
      <div className="product-content-1">
        <div>
          <h1>Scentiments.MNL</h1>
        </div>
        <div className="product-content-1-paragraph">
          <p>
            Elevate your space with out handcrafted scentiments candle, designed
            to combine elegance, sustainability, and exceptional quality.
            Perfect for setting a cozy mood, celebrating special moments, or as
            a thoughtful gift for someone you love.
          </p>
        </div>
      </div>
      <div className="product-content-2">
        <h1>Premium Scents</h1>

        <div className="product-content-2-container-product">
          <div className="container">
            <div>
              <img src={product1} />
            </div>
            <div>
              <h1 className="title">Inspiration Candle </h1>
            </div>
            <div>
              <p className="paragraph">Jasmine, Lemongrass, Spearmint</p>
            </div>
          </div>
          <div className="container">
            <div>
              <img src={product2} />
            </div>
            <div>
              <h1 className="title">Calm Candle </h1>
            </div>
            <div>
              <p className="paragraph">Chamomile, Spearmint, Cherry Blossoms</p>
            </div>
          </div>

          <div className="container">
            <div>
              <img src={product3} />
            </div>
            <div>
              <h1 className="title">Love Candle </h1>
            </div>
            <div>
              <p className="paragraph">Lilac, Lavander, Sage, Strawberry</p>
            </div>
          </div>

          <div className="container">
            <div>
              <img src={product4} />
            </div>
            <div>
              <h1 className="title">Jealousy Candle </h1>
            </div>
            <div>
              <p className="paragraph">Frankincense, Lavander, Ylang Ylang</p>
            </div>
          </div>

          <div className="container">
            <div>
              <img src={product5} />
            </div>
            <div>
              <h1 className="title">Fear Candle </h1>
            </div>
            <div>
              <p className="paragraph">Bergamot, Jasmine, Patchouli</p>
            </div>
          </div>

          <div className="container">
            <div>
              <img src={product6} />
            </div>
            <div>
              <h1 className="title">Melancholy Candle </h1>
            </div>
            <div>
              <p className="paragraph">Bergamot, Frankincense, Ylang Ylang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
