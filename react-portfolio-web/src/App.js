import './App.css';
import Header  from './Components/Header.js';
import HeroPage from './Components/HeroSection.js';
import AboutMe from './Components/AboutMe.js';
import MySkills from './Components/MySkills.js';
import Projcet from './Components/MyProject.js';
import ChatMe from './Components/ChatMe.js';
import Footer from './Components/Footer.js';

function App() {
  return (
        <div>
          <Header />
          <HeroPage />
          <AboutMe />
          <MySkills />
          <Projcet />
          <ChatMe />
          <Footer />
        </div>
  );
}

export default App;