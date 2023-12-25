import React from 'react'
import { FaNode, FaReact } from 'react-icons/fa';
import {BiLogoMongodb} from 'react-icons/bi';
import {SiExpress} from 'react-icons/si';
import './Footer.css';
import FooterImg from './Images/up.png';

 const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer-title'>
            <h1>Ashish Sharma</h1>
            <p>Frontend Developer</p>
            <div className='footer-description'>
            <p>&copy; Ashish <span> all reserved right</span></p>
        </div>
        </div>



    <div className='footer-icon-title'>
    <div className="mern-icons">
        <BiLogoMongodb className="footer-icon" color="green" size={40} />
        <SiExpress className="footer-icon" color="blue" size={40} />
        <FaReact className="footer-icon" color="cyan" size={40} />
        <FaNode className="footer-icon" color="green" size={40} />
    </div>
    </div>

    
    <div className="footer-image">
  
      <a href="#home">    
      <img
        src={FooterImg}
        alt="Home"
      />
      </a>

    </div>


    </div>
  )
}

export default Footer;