import React from 'react';
import './AboutMe.css';
import TopBoyTwo from './Images/TopBoyTwo.gif';

const AboutMe = () => {
  return (
    <div className='about-me-container' id='about'>
 
        <div className='about-main-title'>
                  <h1>Let`s About Me</h1>
                 </div>

        <div className='about-me-card'>
            
           <div className='about-me-img'>
                <img src={TopBoyTwo} alt='TopBoyTwo' />
            </div>

           <div className='about-me-content'>
                <div className='main-title'>
                    <h1>Frontend <span>Developer</span></h1>
                </div>

                <div className='second-title'>
                    <h2>About Me</h2>
                </div>

                <div className='about-description'>
                    <p>
                      Experienced and skilled full-stack developer with a focus on CSS, JavaScript, and React.js.
                      Proficient in creating beautifully designed and responsive web applications.
                      Six months of hands-on experience delivering high-quality projects.
                    </p>
                </div>
           </div>
        </div>
    </div>
  );
};

export default AboutMe;
