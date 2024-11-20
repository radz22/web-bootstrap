import React from "react";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";
import "../style/home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="home-container">
        <div className="home-content1 ">
          <div className="content">
            <div>
              <img src={home1} />
            </div>
            <div>
              <h1 className="home-title">Premium Scents</h1>
            </div>
            <div className="home-paragraph">
              <p>
                dolor sit amet consectetur. Varius nisl fermentum dui volutpat.
                dolor sit amet consectetur. Varius nisl fermentum dui volutpat.
              </p>
            </div>
            <div className="button-container">
              <button className="button">View details</button>
            </div>
          </div>
          <div className="content">
            <div>
              <img src={home2} />
            </div>
            <div>
              <h1 className="home-title">Premium Scents</h1>
            </div>
            <div className="home-paragraph">
              <p>
                dolor sit amet consectetur. Varius nisl fermentum dui volutpat.
                dolor sit amet consectetur. Varius nisl fermentum dui volutpat.
              </p>
            </div>
            <div className="button-container">
              <button className="button">View details</button>
            </div>
          </div>
          <div className="content">
            <div>
              <img src={home3} />
            </div>
            <div>
              <h1 className="home-title">Premium Scents</h1>
            </div>
            <div className="home-paragraph">
              <p>
                dolor sit amet consectetur. Varius nisl fermentum dui volutpat.
                dolor sit amet consectetur. Varius nisl fermentum dui volutpat.
              </p>
            </div>
            <div className="button-container">
              <button className="button">View details</button>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>

        <div className="home-content2">
          <div className="home-container1">
            <img src={home4} />
          </div>
          <div className="home-container2">
            <div className="about">
              <h1>About Me</h1>
            </div>
            <div className="about-paragraph">
              <p>
                Hi there! I’m Anja Biadora, the founder of Scentiments, and I’m
                thrilled to share my passion at making candle with you. Started
                as a relaxing hobby quickly turned into a creative journey that
                lights up everyone’s mood.
              </p>

              <p className="second">
                Each candle I crafted is made love, care, and passion. Thank you
                for stopping by and supporting my hobby.
              </p>
            </div>

            <div className="home-container-button">
              <button className="button">View details</button>
            </div>
          </div>
        </div>

        <div className="home-content3">
          <div className="home-container1">
            <div className="about">
              <h1>Limited Edition </h1>
            </div>
            <div className="about-paragraph">
              <p>
                dolor sit amet consectetur. Tristique tellus cras felis blandit
                eget tortor commodo. Non enim integer metus fames nibh sapien.
                dolor sit amet consectetur. Tristique tellus cras felis blandit
                eget tortor commodo. Non enim integer metus fames nibh sapien.
              </p>
            </div>

            <div className="home-container-button">
              <button className="button">View details</button>
            </div>
          </div>
          <div className="home-container2">
            <img src={home5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
