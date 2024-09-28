import React from "react";
import Details from "./Details";
import "./Work.css";
import { FaArrowRight } from "react-icons/fa";
import time from "../images/time.png";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
function Work() {
  return (
    <>
    {/* <Navbar/> */}
      <Details />
      <div className="work">
        <img src={time} alt="" id="time" />
        <div className="work-content">
        <h1>
          <font color="red">Order food</font> anytime <br /> & anywhere
        </h1> 
        <p>
          Browse our menu to select your favorite dishes and place your order. <br />
          Choose your preferred payment method for a smooth checkout. Track your <br />
          delivery in real-time, and enjoy your meal as soon as it arrives!
        </p>
        <div className="order-btn"><a href="">Order Now <FaArrowRight/></a></div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Work;
