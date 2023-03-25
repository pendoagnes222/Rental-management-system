import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <div className='footer'>
            <h1>support</h1>
            <h2>Help center</h2>
            <h2>Aircover</h2>
            <h2>Supporting people with dissabilities</h2>
            <h2>Cancellation options</h2>
            <h2>Report a neighbour concerns</h2>
      <div className='footer__info'>
            <h1>Community</h1>
            <h2>Airbnb.org:disaster relief housing</h2>
            <h2>Combating discrimination</h2>
        </div>  
        <div className='footer__info2'>
            <h1>Hosting</h1>
            <h2>Airbnb your home</h2>
            <h2>Aircover for Hosts</h2>
            <h2>Explore hosting resources</h2>
            <h2>Visiting our community forum</h2>
            <h2>How to host responsibly</h2>
            <h2>Airbnb-friendly apartments</h2> 
        </div>
        <div className='footer__info3'>
            <h1>Airbnb</h1>
            <h2>Newsroom</h2>
            <h2>learn about new features</h2>
            <h2>letter from our founders</h2>
            <h2>Careers </h2>
            <h2>Investors</h2>
            <h2>Gift cards </h2> 
        </div>
        <hr />
        <div className="footer__terms">
        <h2>Copyright &copy; 2023 Airbnb,Inc. All Rights Reserved</h2>
        </div>
        <div className='footer__social'>
        <a  href='https://facebook.com'>< FaFacebook/> </a>
        <a  href='https://Twitter.com'>< FaTwitter/> </a>
        <a   href='https://Instagran.com'>< FaInstagram/> </a>
        
        </div>

    </div>
     
  )
}

export default Footer
