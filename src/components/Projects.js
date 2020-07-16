import React from 'react';
import '../assets/styles/projects.css';
import github from '../assets/icons/github-brands.svg';
import launch from '../assets/icons/launch.svg';
import projects from '../utils/projectInfo';

function Projects() {
  return (
    <div className='projects-container'>
      <div className='project'>
        <h2>My Projects</h2>
      </div>
      {projects.map((projects) => {
        return (
          <div className='key-project'>
            {projects.title !== 'Key Conservation' ? (
              <div className='covid-pic'>
                {projects.img.map((image) => {
                  return <img src={image} alt='Application Example' />;
                })}
              </div>
            ) : (
              <div className='key-pic' alt='Application Example'>
                {projects.img.map((image) => {
                  return <img src={image} />;
                })}
              </div>
            )}
            <div className='key-text'>
              <div className='project-header'>
                <h2>{projects.title}</h2>
                <div className='icons'>
                  <a
                    href={projects.github_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={github} alt='Go to GitHub' />
                  </a>
                  {projects.live_url ? (
                    <a
                      href={projects.live_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={launch} alt='Go Live' />
                    </a>
                  ) : null}
                </div>
              </div>
              <p>{projects.description}</p>
              {projects.live_url === null ? (
                <p>
                  Due to COVID-19, the launch of this app has been postponed.
                  You can view updates on the{' '}
                  <a
                    href='https://www.keyconservation.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Key Conservation
                  </a>{' '}
                  website
                </p>
              ) : null}
              <p>I built the {projects.role} with:</p>
              <div className='tech-lists'>
                <ul className='stack-points'>
                  {projects.built_with.map((stack) => {
                    return <li>{stack}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
