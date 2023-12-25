import React, { useState } from 'react';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import HeaderImg from './Images/HeaderTwo.png';
import HeaderBoy from './Images/HeaderBoy.jpg';
import './Header.css';


const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleToggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
 
  const handleNavLinkClick = () => {
    setShowNavLinks(false); 
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={HeaderImg} alt='' />
        <h1>Ashish</h1>
      </div>

      <nav className={`nav-links ${showNavLinks ? 'active' : ''}`}>
        <a href='#home' onClick={handleNavLinkClick}>Home</a>
        <a href="#about" onClick={handleNavLinkClick}>About</a>
        <a href="#skills" onClick={handleNavLinkClick}>Skills</a>
        <a href="#project" onClick={handleNavLinkClick}>Projects</a>
        <a href="#chatme" onClick={handleNavLinkClick}>Contact</a>
 
         <div className='Header-extra'>
             <img src={HeaderBoy} alt='HeaderBoy' />
         </div>

      </nav>

      <div className="menu-icon" onClick={handleToggleNavLinks}>
        {showNavLinks ? <TiTimes /> : <TiThMenu />}
      </div>
    </div>
  );
}

export default Header;
