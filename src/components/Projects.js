import React from 'react';
import keyLogin from '../assets/images/key-login.png';
import '../assets/styles/projects.css';
import keyFeed from '../assets/images/key-feed.png';
import keyProfile from '../assets/images/key-profile.png';

export default function Projects() {
  return (
    <div className='projects-container'>
      <div className='project'>
        <h2>My Projects</h2>
      </div>
      <div className='key-project'>
        <div className='key-pic'>
          <img src={keyLogin} />
          <img src={keyFeed} />
          <img src={keyProfile} />
        </div>
        <div className='key-text'>
          <h2>Key Conservation</h2>
          <p>
            Key Conservation is helping conservationists gain critical funding
            and global support through a mobile app that provides real-time
            updates on day-to-day campaigns. The Key Conservation app has a
            scrolling live feed that updates as needs from conservationists
            occur around the world in real-time.
          </p>
          <p>Built With:</p>
          <div className='tech-lists'>
            <ul>
              <li>React Native & Redux</li>
              <li>Node.js & Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
