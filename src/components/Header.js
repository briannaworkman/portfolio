import React from 'react';
import '../assets/styles/header.css';
import resume from '../assets/brianna-workman.pdf';

function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <p className='header-p'>Hi, my name is</p>
        <h1 className='header-h1'>Brianna Workman.</h1>
        <h2 className='header-h2'>I am a Software Engineer.</h2>
        <p className='summary'>
          I have a passion for building exceptional, high-quality websites and
          applicaitons for the web, iOS, and Android.
        </p>
        <div className='button-container'>
          <a href='mailto:brianna.workman@hotmail.com'>
            <button className='button'>Say Hello</button>
          </a>
          <a href={resume} download>
            <button className='button'>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
