import './HeroSection.css';
import CoffeeImg from './Images/MainCoffee.png';
import MainArrowImg from './Images/Arrow.png';
import HiImg from './Images/Hi.png';
import ReadImg from './Images/Read.png';
import HeadsetImg from './Images/Headset.png';
import HappyImg from './Images/Happy.png';
// import TopBoyTwoImg from './Images/TopBoyTwo.gif';
import HomeImg from './Images/One.jpg';


const HeroPage = () => {

  return (
    <div className="main-body" id='home'>
      <div className="container">

        {/* Main Heading */}
        <h3 className="main-heading">
          <span role="img" aria-label="Sparkles">✨</span> Welcome to my website! Enjoy the journey <span role="img" aria-label="Sparkles">✨</span>
        </h3>

        <div className="first-title">
          {/* Title */}
          <h1 className="title">
            Hello! Take a coffee & explore my Portfolio <img src={CoffeeImg} alt="Coffee" />
          </h1>
        </div>


        <div className="big-card">

          <div className="first-card">
            {/* Arrow Image */}
            <div className="arrow">
              <img src={MainArrowImg} alt="arrow" />
            </div>

            <div className="content">
              {/* Card Title */}
              <h2 className="card-title">Hi <img src={HiImg} alt='Hi' />  </h2>
              {/* Name */}
              <p className="name">
                I am <span>Ashish Sharma</span>
              </p>
              {/* Description */}
              <p className="description">
                Whether you're interested in web development, mobile app development, data science, or machine learning, CodeVerse has something for everyone.
              </p>
              {/* Button */}
              <button className="button">More About !</button>
            </div>
          </div>

          <div className="second-card">
            {/* Card Image */}
          
            {/* <img src="https://i.pinimg.com/564x/58/85/06/588506c1bc8bdbf033d557478cc16642.jpg" alt="Card" /> */}
            <img src={HomeImg} alt="Card" />


          </div>

        </div>

        {/* Small Card Container */}
        <div className="small-card-container">
          <div className="card">
            {/* Small Card Image */}
            <img src={ReadImg} alt="Read" className="small-card-image" />
            <div className="card-content">
              {/* Small Card Content */}
              <h3>05+ projects</h3>
            </div>
          </div>

          <div className="card">
            <img src={HeadsetImg} alt="Headset" className="small-card-image" />
            <div className="card-content">
              <h3>6+ Month Exe.</h3>
            </div>
          </div>

          <div className="card">
            <img src={HappyImg} alt="Happy" className="small-card-image" />
            <div className="card-content">
              <h3>04+ Language</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroPage;
