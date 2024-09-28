import React from "react";
import "./Footer.css";
import footer from "../images/footer_banner.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

function Footer() {
  return (
    <>
  <div className="footer_content">
      {/* <div id="footer_img">
        <img src={footer} alt="" />
        <h2>
          Join our membership and get <br /> discount up to 50%
        </h2>
        <div className="footer-btn">
          <a href="">Order Now </a>
        </div>
      </div> */}

      <div className="footer">
        <div className="col-1">
          <h3>FiguEats <IoFastFoodOutline/> </h3>
          <p>
            23 Maple Street, Cedar <br />
            Hills, Green Valley City
          </p>
          <div className="social">
            <div className="icon">
              <a href="https://www.instagram.com" target="_blank" rel="">
                <FaInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.facebook.com" target="_blank" rel="">
                <FaFacebook />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.twitter.com" target="_blank" rel="n">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="col-2">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Career</p>
          <p>How It Works</p>
        </div>
        <div className="col-3">
          <h3>Policy</h3>
          <p>FAQ</p>
          <p>Privacy</p>
          <p>Shipping</p>
        </div>
        <div className="col-4">
          <h3>Get In Touch</h3>
          <p>+92 300 4589665</p>
          <p>figueats@gmail.com</p>
        </div>
      </div> 
      <hr />
      <div className="last">
      <p>&copy; 2024 FiguEats. ALL RIGHTS RESERVED.</p>
      </div>
      </div>
    </>
  );
}

export default Footer;
