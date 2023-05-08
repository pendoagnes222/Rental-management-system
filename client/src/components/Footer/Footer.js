import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
    <hr />
      <section className="footer-info">
      
        <h2>We are based in Ermak, Nairobi </h2>
        <p>We work with clients from all over. Get in touch with us</p>
        <div className="contact_info">
          <h4><GrMail className='icon' /> info@rentals.com</h4>
          <h4><BsFillTelephoneInboundFill className='icon2' /> (254) 3345 7689</h4>
        </div>
        <div className='footer__social'>
          <a className='facebook' href='https://facebook.com'>< FaFacebook/> </a>
          <a className='twitter' href='https://Twitter.com'>< FaTwitter/> </a>
          <a className='instagram' href='https://Instagran.com'>< FaInstagram/> </a>
          <a className='telegram' href='https://t.me'>< FaTelegram/> </a>
        </div>
        
      </section>
      <div className="footer__terms">
        <h2>Copyright &copy; 2023 BandB, Inc. All Rights Reserved</h2>
      </div>
    </div>
  )
}

export default Footer
