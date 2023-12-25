import React from 'react';
import './MyProject.css';
import ProjectOne from './Images/ProjectOne.png';
import ProjectTwo from './Images/ProjectTwo.png';
import ProjectThree from './Images/ProjectThree.png';
import OfficeOne from './Images/OfficeOne.png';
import OfficeTwo from './Images/OfficeTwo.png';
import OfficeThree from './Images/OfficeThree.png';

const ProjectSection = () => {
  return (

<div className='main-title-project' id='project'>
   
   <h1>My Projcets</h1>

    <div className="project-card-section">

    <div className="main-project-card">
        <div className="project-card-image">
          <img src={ProjectThree} alt="Project" className="project-image" />
          <div className="project-overlay">
            <button className="project-button">
              <a href="http://my-first-projcet-portfolio-as.netlify.app">View Project</a>
            </button>
          </div>
        </div>
        <div className="project-card-info">
        <img src={OfficeOne} alt="Office One" className="emoji-image" />
        </div>
      </div>

    
   <div className="main-project-card">
        <div className="project-card-image">
          <img src={ProjectTwo} alt="Project" className="project-image" />
          <div className="project-overlay">
            <button>
              <a  href="http://my-second-projcet-portfolio-as.netlify.app">View Project</a>
            </button>
          </div>
        </div>
        <div className="project-card-info">
        <img src={OfficeTwo} alt="Office Two" className="emoji-image" />
        </div>
      </div>

  

      <div className="main-project-card">
        <div className="project-card-image">
          <img src={ProjectOne} alt="Project" className="project-image" />
          <div className="project-overlay">
            <button>
              <a href="http://my-third-projcet-create-ashish.netlify.app">View Project</a>
            </button>
          </div>
        </div>
        <div className="project-card-info">
        <img src={OfficeThree} alt="Office Three" className="emoji-image" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectSection;
