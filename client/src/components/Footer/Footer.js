import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, } from "react-icons/fa";
import { GrMail} from "react-icons/gr";
import { BsFillTelephoneInboundFill} from "react-icons/bs";



function Footer() {
  return (
    <div className='footer'>
            <section className="footer-info">
              
       <h2>We are based in Exmak, Nairobi </h2>
       <p>we work with clients from all over. Get in touch with us</p>
       <div className="contact_info">
        <h4><GrMail className='icon' /> info@rentals.com</h4>
        <h4><BsFillTelephoneInboundFill className='icon2'/> (254) 3345 7689</h4>
       </div>
       <div className='footer__social'>
        <a  className='facebook' href='https://facebook.com'>< FaFacebook/> </a>
        <a  className='twitter' href='https://Twitter.com'>< FaTwitter/> </a>
        <a  className='instagram' href='https://Instagran.com'>< FaInstagram/> </a>
        <a  className='instagram' href='https://Instagran.com'>< FaTelegram/> </a>
        
        
        </div>
        <hr />
        
       

      </section>
      
     {/* <section className="footer-about">
        <p>Simplicity carried to an extreme becomes elegance <br /> design with smile</p></section>
<section className='footer-social-media d-flex justify-content-evenly'></section>*/}
            
        
        <div className="footer__terms">
        <h2>Copyright &copy; 2023 Airbnb,Inc. All Rights Reserved</h2>
        </div>
        

    </div>
     
  )
}

export default Footer
