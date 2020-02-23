import React from 'react';
import key from '../assets/images/key-preview.png';
import '../assets/styles/projects.css';

export default function Projects() {
  return (
    <div className='projects-container'>
      <div className='project'>
        <h2>My Projects</h2>
        <div className='key-pic'>
          <img src={key} />
        </div>
      </div>
    </div>
  );
}
