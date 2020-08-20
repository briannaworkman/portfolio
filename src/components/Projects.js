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
                  return <img src={image} alt='application example' />;
                })}
              </div>
            )}
            <div className='key-text'>
              <div className='project-header'>
                <h2 className='project-title'>{projects.title}</h2>
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
              <p className='description'>{projects.description}</p>
              <div className='tech-lists'>
                <div className='stack'>
                  {projects.built_with.map((stack) => {
                    return <p>{stack}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
