import React from 'react'
import './Error.css';
import error from '../images/error.png';

function Error() {
  return (
    <>
    <div className="error-t">
      <div className="err-c">
        <h1>Oops!</h1>
        <h3>We cant seem to find the <br />
        page youre looking for.</h3>
      <h6><a href="/" className='er'>Back to home</a></h6>
      </div>
      <div className="error-img">
        <img src={error} alt="" />
      </div>
      </div>
    </>
  )
}

export default Error
