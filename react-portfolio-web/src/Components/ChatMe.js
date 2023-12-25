import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import HeaderOne from './Images/HeaderOne.png';
import CallOneImg from './Images/CallTwo.png';
import './ChatMe.css';



function ChatMe() {
  return (
    <div className='chatme-container' id='chatme'>
      <div className='chat-title'>
        <h1>Take a Coffee & Chat With Me</h1>
      </div>

      <div className='chat-content'>
        <img src={HeaderOne} alt='Header' />
        
        <div className='chat-phone'>
          <img src={CallOneImg} alt='call' />
          <h2>+91 9617036226</h2>
        </div>

        <div className='social-links'>
          <a href='linkdin'><FaLinkedin style={{ color: '#0077B5' }} /></a>
          <a href='github'><FaGithub style={{ color: '#000000' }} /></a>
          <a href='whatsapp'><FaWhatsapp style={{ color: '#25D366' }} /></a>
          <a href='twitter'><FaTwitter style={{ color: '#1DA1F2' }} /></a>
        </div>
      </div>

      <div className='contact-form'>
        <h2>Let's Connect With Me</h2>
        <form>
          <div className='form-group'>
            <input type='text' id='YourName' name='YourName' required placeholder='Your Name' />
          </div>
          <div className='form-group'>
            <input type='email' id='email' name='email' required placeholder='Enter Email' />
          </div>
          <div className='form-group'>
            <textarea id='message' name='message' required placeholder='Let`s Type A Message'></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>

    </div>

  
  );
}

export default ChatMe;
