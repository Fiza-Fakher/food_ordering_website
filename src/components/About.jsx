import React from "react";
import "./About.css";
import Details from "./Details";
import chef from "../images/chef.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="about">
        <div className="chef-img">
          <img src={chef} alt="" className="chef" />
        </div>
        <div className="about-detail">
          <h1>About us</h1>
          <p>
            At FiguEats, we’re all about great food and fast service. Our <br />
            skilled chefs use top-quality ingredients to make delicious dishes <br />
            that you’ll love. We also make sure your food gets to you quickly <br />
            and still tastes fresh.
          </p>
          <h2>Why FiguEats?</h2>
          <ul>
           <li> <strong>Top Chefs:</strong> Our chefs create amazing meals that will impress you.</li>
           <li> <strong>Best Ingredients:</strong> We use only the freshest ingredients for the best flavor.</li>
           <li><strong>Fast Delivery:</strong> Get your food quickly with our speedy delivery service.</li>
          </ul>
        </div>
      </div>
      <p id="why">Choose FiguEats for tasty food and fast delivery.</p>
      <div className="order-btn1"><a href="">Order Now <FaArrowRight/></a></div>
      <Details />
      {/* <Footer/> */}
    </>
  );
}

export default About;
