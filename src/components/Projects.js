import React, { Component } from 'react';
import keyLogin from '../assets/images/key-login.png';
import '../assets/styles/projects.css';
import keyFeed from '../assets/images/key-feed.png';
import keyProfile from '../assets/images/key-profile.png';
import movieBox from '../assets/images/movie-box.gif';
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
            <img src={keyLogin} alt='Key Conservation Login Page' />
            <img src={keyFeed} alt='Key Conservation Live Feed' />
            <img
              src={keyProfile}
              className='no-show'
              alt='A Key Conservation Profile Page'
            />
          </div>
          <div className='key-text'>
            <div className='project-header'>
              <h2>Key Conservation</h2>
              <div className='icons'>
                <a
                  href='https://github.com/Lambda-School-Labs?q=key&type=&language='
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={github} alt='Go to GitHub' />
                </a>
                <Modal show={this.state.show}>
                  <Unavailable handleClose={this.hideModal} />
                </Modal>
                <img src={launch} alt='Go Live' onClick={this.showModal} />
              </div>
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
        <div className='key-project'>
          <div className='movie-pic'>
            <img src={movieBox} alt='Gif of the Movie Box App' />
          </div>
          <div className='key-text'>
            <div className='project-header'>
              <h2>Movie Box</h2>
              <div className='icons'>
                <a
                  href='https://github.com/briworkman/movie-box'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={github} alt='Go to GitHub' />
                </a>
                <a
                  href='https://the-movie-box.netlify.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={launch} alt='Go Live' />
                </a>
              </div>
            </div>
            <p>
              Movie Box is an app that allows you to view your favorite movie
              and TV show plots, budgets, actors, and more.
            </p>
            <p>Built With:</p>
            <div className='tech-lists'>
              <ul>
                <li>React</li>
                <li>
                  <a
                    href='https://www.themoviedb.org/?language=en-US'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    The Movie Database
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
