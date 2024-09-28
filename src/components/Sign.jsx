import React, { useState } from "react";
import "./Sign.css";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import axios from 'axios';

function Sign() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignIn ? '/api/auth/signin' : '/api/auth/signup';
    const data = { name, email, password };

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      // Handle successful response (e.g., redirect, show message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className={`container ${!isSignIn ? "right-panel-active" : ""}`}>
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebook />
            </a>
            <a href="#" className="social">
              <FaGoogle />
            </a>
            <a href="#" className="social">
              <FaLinkedin />
            </a>
          </div>
          <p>Use your email for registration</p>
          <input
            type="text"
            placeholder="Name"
            required={!isSignIn}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isSignIn ? 'Log In' : 'Sign Up'}</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebook />
            </a>
            <a href="#" className="social">
              <FaGoogle />
            </a>
            <a href="#" className="social">
              <FaLinkedin />
            </a>
          </div>
          <p>Use your account</p>
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          <a href="#">Forgot your Password?</a>
          <button type="submit">Log In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info.</p>
            <button onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us.</p>
            <button onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
