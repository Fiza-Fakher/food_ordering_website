import React from 'react'
import './Details.css';
import delivery from '../images/delivery.png';
import order from '../images/order icon.png';
import best from '../images/best quality.png';
function Details() {
  return (
<>
<div className="quality">
<h4>How it works</h4>
<h2>What We Serve</h2>
<p>Product quality is our priority, and always gurantees <br /> fresshness and safety untill it is in your hands</p>
</div>
<div className="images">
 <div className="oder-content">
   <img className='order' src={order} alt="" />
   <h1>Easy To Order</h1>
   <p>You can also order through <br /> the app</p>
    </div>
    <div className="delivery-content">
  <img className='delivery' src={delivery} alt="" />
  <h1>Fatest Delivery</h1>
  <p>Delivery will be on <br /> time</p>
  </div>
  <div className="best-content">
  <img className='best' src={best} alt="" />
  <h1>Best Quality</h1>
    <p>The best quality of food <br /> for you</p>
  </div>
</div>
</>
  )
}

export default Details
