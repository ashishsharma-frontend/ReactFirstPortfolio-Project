import React from 'react';
import './MySkills.css';
import Frontend from './Images/Frontend.jpg'
import User from './Images/UI-UX.jpg';
import Backend from './Images/Backend.jpg'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { SiReact } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
// import { IoLogoJavascript } from 'react-icons/io';


const MySkills = () => {
  return (

 <div className='skills-full-contain' id='skills'>

    <div className='skills-main-title'>
          <h1>My Skills</h1>
    </div>

<div className='skills-main'>
  <div className="skills-container">
    <div className="skills-card card-1">
      <div className="skills-img-box">
        <img src={Frontend} alt="Frontend" />
      </div>
      <div className="skills-content">
        <h2>Frontend</h2>
        <p>
          Frontend refers to the client-side of a web application or website. It involves building the user interface and user experience.
        </p>
        <div className="icons-container">
         <AiFillHtml5 className="icon" color="#E34C26" size={25} />
         <SiCss3 className="icon" color="#2965f1" size={25} />
         <IoLogoJavascript className="icon" color="#F0DB4F" size={25} />
         <SiReact className="icon" color="#61DAFB" size={25} />
    </div>
      </div>
    </div>


    <div className="skills-card card-2">
      <div className="skills-img-box">
        <img src={User} alt="UI/UX" />
      </div>
      <div className="skills-content">
        <h2>UI/UX</h2>
        <p>
          UI (User Interface) and UX (User Experience) are crucial aspects of web design. A good UI/UX design enhances user satisfaction.
        </p>
        <div className="icons-container">
        <SiFigma className="icon" color="#61DAFB" size={25} />
      </div>
      </div>
    </div>


    <div className="skills-card card-3">
      <div className="skills-img-box">
        <img src={Backend} alt="Backend" />
      </div>
      <div className="skills-content">
        <h2>Backend</h2>
        <p>
           As a backend developer, you focus on the logic and functionality.
        </p>
        <div className="icons-container">
        <SiPython className="icon" color="#3776AB" size={25} />
        <DiJava className="icon" color="#007396" size={25} />
        <IoLogoJavascript className="icon" color="#339933" size={25} />
      </div>
      </div>
    </div>
  </div>
</div>
</div>

);
};

export default MySkills;