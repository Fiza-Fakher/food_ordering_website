import React, { useState, useEffect } from "react";
import profile from "../images/profile_image.png";
// import r1 from '../images/r1.jpg';
// import r2 from '../images/r2.jpg';
// import r3 from '../images/r3.jpg';
import './Reviews.css';

function Reviews() {
  const testimonials = [
    {
      name: "Someone Famous",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum accusamus est!",
      img: profile,
    },
    {
      name: "Another Famous Person",
      text: "Consectetur adipisicing elit. Doloribus rerum accusamus est!",
      img: profile,
    },
    {
      name: "Yet Another Famous Person",
      text: "Rerum accusamus est! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      img: profile,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex === 0 ? testimonials.length : currentIndex) - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="reviews">
      {/* <div className="images1">
        <img src={r1} alt="Top Image" className="top-image" />
        <div className="layout">
          <img src={r2} alt="Image 1" className="r2" />
          <img src={r3} alt="Image 2" className="r3" />
        </div>
      </div> */}
      <div className="text">
        <div className="heading">
        <h2>Reviews</h2>
        <h4>What Our Client Says</h4>
        <div className="slider">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="testimonial">
            <img src={testimonials[currentIndex].img} alt="Profile" />
            <h3>{testimonials[currentIndex].name}</h3>
            <p>{testimonials[currentIndex].text}</p>
          </div>
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div> </div>
      </div>
    </div>
  );
}

export default Reviews;
