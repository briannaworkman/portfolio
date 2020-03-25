import React from 'react';
import '../assets/styles/unavailable.css';
import development from '../assets/images/development.svg';

const Unavailable = ({ handleClose }) => {
  return (
    <div className='unavailable-container'>
      <div className='unavailable'>
        <div className='unavailable-img'>
          <img src={development} alt='Man Coding' />
        </div>
        <div className='unavailable-text'>
          <h1>Oops! Looks like this app is still in development.</h1>
          <p>
            Would you like to go to the <b>Key Conservation</b> website?
          </p>
          <a
            href='https://www.keyconservation.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='button' onClick={handleClose}>
              Yes, please!
            </button>
          </a>
          <button className='button' onClick={handleClose}>
            No, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unavailable;
