import React from 'react'

function Delivery() {
  return (
    <>
      <div className="delivery">
        <h3>Delivery Information</h3>
        <div className="cols">
          <div className="col-1">
            <h4>Name</h4>
            <input type="text" placeholder="Your Name" className="in1" />
            <h4>Email</h4>
            <input type="email" placeholder="Your email" className="in1"/>
            <h4>State</h4>
            <input type="text" placeholder="Your State" className="in1" />
            <h4>Address</h4>
            <input type="text" placeholder="4796,Liberty"  />
          </div>
          <div className="col-2">
            <h4>Mobile Number</h4>
            <input type="tel" />
            <h4>City</h4>
            <input type="text" placeholder="Your city" />
            <div className="zip-area">
              <div className="zip-no">
                <h4>ZIP</h4>
              </div>
              <div className="state">
                <select name="" id="">
                  <option value="">Lahore</option>
                  <option value="">Karachi</option>
                  <option value="">Seoul</option>
                  <option value="">Basun</option>
                  <option value="">Islamabad</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Delivery
