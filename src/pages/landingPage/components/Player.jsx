import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '';

const Player = ({ name, picSrc, github, linkedIn }) => {
  return (
    <div className='player-box'>
      {/* <div className='player-pic'> */}
      <img src={picSrc} />
      <h3>{name} </h3>
      {/* </div> */}
      <div className='links'>
        <a href={linkedIn} target='_blank'>
          <FontAwesomeIcon icon='fa-brands fa-linkedin' size='2x' />
        </a>
        <a href={github}>
          <FontAwesomeIcon icon='fa-brands fa-github' size='2x' />
        </a>
      </div>
    </div>
  );
};

export default Player;
// <a href="your link here"> <i class="fa fa-dribbble fa-4x"></i></a>
