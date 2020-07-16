import React, { Component } from 'react';
import keyLogin from '../assets/images/key-login.png';
import '../assets/styles/projects.css';
import keyFeed from '../assets/images/key-feed.png';
import keyProfile from '../assets/images/key-profile.png';
import movieBox from '../assets/images/movie-box.gif';
import cookBook from '../assets/images/cookbook.gif';
import covid from '../assets/images/covid.gif';
import github from '../assets/icons/github-brands.svg';
import launch from '../assets/icons/launch.svg';
import recipe from '../assets/images/recipe-cheqr.gif';

import data from '../utils/projectInfo';
console.log(data);

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
          <div className='covid-pic'>
            <img src={recipe} alt='Gif of Recipe Cheqr' />
          </div>
          <div className='key-text'>
            <div className='project-header'>
              <h2>Recipe Cheqr</h2>
              <div className='icons'>
                <a
                  href='https://github.com/irisjitomo/recipe-site-7days7websites'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={github} alt='Go to GitHub' />
                </a>
                <a
                  href='https://recipecheqr.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={launch} alt='Go Live' />
                </a>
              </div>
            </div>
            <p>
              The Recipe Cheqr app allows users to search, filter, and view
              recipes and their specific instructions, as well as their
              nutrition facts. The app also allows users to generate/create
              grocery lists and create/login to a profile to save their favorite
              recipes
            </p>
            <p>I built the front end with:</p>
            <div className='tech-lists'>
              <ul className='stack-points'>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='key-project'>
          <div className='covid-pic'>
            <img src={covid} alt='Gif of the COVID-19 Dashboard' />
          </div>
          <div className='key-text'>
            <div className='project-header'>
              <h2>COVID-19 Dashboard</h2>
              <div className='icons'>
                <a
                  href='https://github.com/briworkman/covid-19'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={github} alt='Go to GitHub' />
                </a>
                <a
                  href='https://ncovid-19-dashboard.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={launch} alt='Go Live' />
                </a>
              </div>
            </div>
            <p>
              The COVID-19 Dashboard helps you to track the virus and it's
              impact all over the world by displaying current statistics in an
              easy to understand, visual way. All data is updated at least once
              a day via active APIs
            </p>
            <p>I built the front end with:</p>
            <div className='tech-lists'>
              <ul className='stack-points'>
                <li>React</li>
              </ul>
            </div>
          </div>
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
              </div>
            </div>
            <p>
              Key Conservation is helping conservationists gain critical funding
              and global support through a mobile app that provides real-time
              updates on day-to-day campaigns. The Key Conservation app has a
              scrolling live feed that updates as needs from conservationists
              occur around the world in real-time.
            </p>
            <p>
              Due to COVID-19, the launch of this app has been postponed. You
              can view updates on the{' '}
              <a
                href='https://www.keyconservation.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Key Conservation
              </a>{' '}
              website
            </p>
            <p>
              I worked on the scrolling live feed and the connect/follow feature
              with:
            </p>
            <div className='tech-lists'>
              <ul className='stack-points'>
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
                  href='https://the-movie-box.netlify.app'
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
            <p>I built the front end with:</p>
            <div className='tech-lists'>
              <ul className='stack-points'>
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
        <div className='key-project'>
          <div className='cook-pic'>
            <img src={cookBook} alt='Gif of the Cook Book landing page' />
          </div>
          <div className='key-text'>
            <div className='project-header'>
              <h2>Cook Book Landing Page</h2>
              <div className='icons'>
                <a
                  href='https://github.com/ChefPortfolio/UI/tree/brianna-workman'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={github} alt='Go to GitHub' />
                </a>
                <a
                  href='https://cook-book.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={launch} alt='Go Live' />
                </a>
              </div>
            </div>
            <p>
              The Cook Book landing page allows you to view the Cook Book
              mission and what using the app may look like, as well as links you
              to the sign in and sign up pages for the app.
            </p>
            <p>I built the landing and about pages with:</p>
            <div className='tech-lists'>
              <ul className='stack-points'>
                <li>HTML</li>
                <li>CSS w/ LESS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
