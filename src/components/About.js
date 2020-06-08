import React from 'react';
import profile from '../assets/images/profile.png';
import '../assets/styles/about.css';

export default function About() {
  return (
    <div className='main-about-container'>
      <div className='about-container'>
        <div className='about'>
          <h2>About Me</h2>
          <p>
            Hello! I'm Brianna, a software engineer who enjoys building
            exceptional websites and apps that provide intuitive, responsive,
            pixel-perfect user interfaces with efficient and modern backends.
          </p>
          <p>
            I recently completed Lambda School's Full Stack Web Development
            program where I worked on a wide variety of fun and interesting
            projects on a daily basis.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <div className='tech-lists'>
            <ul>
              <li>JavaScript(ES6+)</li>
              <li>React & React Native</li>
              <li>Node & Express</li>
            </ul>
            <ul>
              <li>HTML & CSS</li>
              <li>Redux & Context</li>
              <li>Python & Django</li>
            </ul>
          </div>
        </div>
        <div className='profile-picture'>
          <img src={profile} alt='Brianna Workman' />
        </div>
      </div>
    </div>
  );
}
