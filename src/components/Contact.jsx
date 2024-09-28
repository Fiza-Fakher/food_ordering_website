import React from 'react'
import './Contact.css';
import contact from '../images/contact.gif';
import { IoPerson } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
function Contact() {
  return (
    <>
    <div className="contact-us">
        <div className="con-text">
        <h1>Contact Us</h1>
        <div className="name">
        <IoPerson id='n-icon'/>
        <input type="text" placeholder='Your Name' required id='name-in'/></div>
        <div className="email">
   <MdOutlineMailLock/>
   <input type="email" placeholder='Your Email' required id='email-in'/>
        </div>
        <input type="text" placeholder='Message' id='msg' required />
        <div typeof='submit' className="send-btn"><a href="">Send msg <FaPaperPlane/></a></div>
        </div>
 <img src={contact} alt="" id='contact' />

 </div>
    </>
  )
}

export default Contact
