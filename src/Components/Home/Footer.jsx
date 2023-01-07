import React from 'react';
import fb from "../../Resources/fb.png";
import lin from "../../Resources/linkedin.gif";
import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-flex'>

            <div>
                <p>ABOUT US</p>
                <br />
                <p>Rubixe™ is a global technology company specializing in disruptive technologies - Artificial Intelligence - AI, Machine Learning, Robotic Process Automation - RPA, BlockChain and Internet of Things - IoT. Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
            </div>

            <div>
                <p>MENUS</p>
                <br />
                <p>Home</p>
                <p>Services</p>
                <p>Products</p>
                <p>Career</p>
            </div>

            <div>
                <p>LEARN MORE</p>
                <br />
                <p>About</p>
                <p>Contact Us</p>
            </div>

            <div>
                <p>ADDRESS</p>
                <br />
                <p>Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068</p>
                <p>Phone: 0804-717-8999</p>
                <p>Email: hi@rubixe.com</p>
                <br /><br />
                <p>Social Media</p>
                 <div>
                     <img src={fb} alt="" />
                     <img src={lin} alt="" />
                 </div>
            </div>

        </div>
    </div>
  )
}

export default Footer;