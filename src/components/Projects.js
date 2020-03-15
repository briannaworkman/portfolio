import React, { Component } from 'react';
import keyLogin from '../assets/images/key-login.png';
import '../assets/styles/projects.css';
import keyFeed from '../assets/images/key-feed.png';
import keyProfile from '../assets/images/key-profile.png';
import github from '../assets/icons/github-brands.svg';
import launch from '../assets/icons/launch.svg';
import Modal from './Modal';
import Unavailable from './Unavailable';

class Projects extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
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
            <div className='project-header'>
              <h2>Key Conservation</h2>
              <a
                href='https://github.com/orgs/Lambda-School-Labs/teams/labs-20-key-conservation/repositories'
                target='_blank'
              >
                <img src={github} />
              </a>
              <Modal show={this.state.show}>
                <Unavailable handleClose={this.hideModal} />
              </Modal>
              <img src={launch} alt='Go Live' onClick={this.showModal} />
            </div>
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
}

export default Projects;
