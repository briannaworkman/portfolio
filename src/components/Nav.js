import React from 'react';
import '../assets/styles/nav.css';
import resume from '../assets/brianna-workman.pdf';

function Nav() {
  return (
    <div className='nav'>
      <div className='container'>
        <a href='mailto:brianna.workman@hotmail.com'>Contact</a>
        <a href={resume} download>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Nav;
