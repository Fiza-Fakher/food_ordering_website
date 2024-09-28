import React from "react";
import Popular from "./Popular";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import pic1 from '../images/banner.jpg';
import Reviews from "./Reviews";
import "./Home.css";
import Details from "./Details";
function Home() {
  return (
    <>
      <div className="parent">
        <div className="content">
          <h1>Welcome to FiguEats!</h1>
          <h3>
            Delicious Fast Food Delivered Right to Your{" "}
            <font color="red">Doorstep</font>
          </h3>
          <p>
            At FiguEats, we deliver mouthwatering fast food quickly and <br />
            efficiently. Enjoy juicy burgers, crispy fries, savory pizzas, and <br />
            tasty snacks, all made with the freshest ingredients and the highest <br />
            quality standards, right to your doorstep.
          </p>
          <div className="btns">
          <div className="order-btn"><a href="/Menu">Order Now <FaArrowRight/></a></div>
          <div className="video-btn"><a href="https://youtu.be/7L0lbT8K4C4?si=jfoxnyg99dblJQ6l" target="blank"><FaPlayCircle/></a></div>
          <div className="watch-btn"><a href="https://youtu.be/7L0lbT8K4C4?si=jfoxnyg99dblJQ6l" target="blank">Watch video</a></div>
          </div>
        </div>
        <div className="image">
            <img src={pic1} alt="" />
        </div>
      </div>
      <Details/>
      <Popular/> <Reviews/> 
    </>
  );
}

export default Home;
