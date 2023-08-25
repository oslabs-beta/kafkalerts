import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = ({ name, picSrc, github, linkedIn }) => {
  return (
    <div className='player-box'>
      <img src={picSrc} />
      <h3>{name} </h3>
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
