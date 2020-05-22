import React from 'react';
import '../assets/styles/nav.css';
import resume from '../assets/brianna-workman.pdf';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className='nav' id='navbar'>
      <div className='container'>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='header'
              activeClassName='selected'
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='about'
              activeClassName='selected'
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='project'
              activeClassName='selected'
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='contact'
              activeClassName='selected'
            >
              Contact
            </Link>
          </li>
          <a href={resume} download>
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
