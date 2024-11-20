import React from "react";
import "../style/about.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-content-1">
        <div className="about-content-1-container">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-content-2">
        <div className="image">
          <img src={about1} />
        </div>
        <div className="about-content-2-container">
          <div>
            <h1>Soyblend Wax</h1>
          </div>
          <div className="paragraph">
            <p>
              Each candle created is made using a luxurious soy blend, chosen
              for its clean burn, long-lasting quality, and Eco-friendly
              benefits. From soothing scents to designing unique styles, every
              details is carefully considered to bring you a product that’s both
              beautiful and sustainable.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-3">
        <div className="about-content-3-container">
          <div className="image">
            <img src={about2} />
          </div>
          <div>
            <h1>Premium Fragrance Oils</h1>
          </div>
          <div className="paragraph-container">
            <p>
              Each candle is infused with handpicked fragrance oils, offering
              wide range of captivating scents from soothing scents invigorating
              spices and cosy classics.
            </p>
          </div>
        </div>
        <div className="about-content-3-container">
          <div className="image">
            <img src={about3} />
          </div>
          <div>
            <h1>Wood and Cloth Wicks</h1>
          </div>
          <div className="paragraph-container">
            <p>
              We offer two wick options to suit your preference. Our wood wicks
              provide gentle, crackling sound reminiscent of a fireplace, while
              our cloth wicks deliver classy, steady flame for more traditional
              experience.
            </p>
          </div>
        </div>
        <div className="about-content-3-container">
          <div className="image">
            <img src={about4} />
          </div>
          <div>
            <h1>Hand-Poured Craftmanship</h1>
          </div>
          <div className="paragraph-container">
            <p>
              Every candle is carefully hand-poured in small batches to ensure
              consistent quality and meticulous attention detail.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-4">
        <div className="about-content-4-container">
          <div>
            <h1>Eco-Friendly Packaging</h1>
          </div>
          <div className="paragraph">
            <p>
              Packaging we used eco-friendly boxes, reusable jars with minimal
              design, sustainable materials, our candles make the perfect girft
              or personal indulgence.
            </p>
          </div>
        </div>
        <div>
          <img src={about5} />
        </div>
      </div>
    </div>
  );
};

export default About;
