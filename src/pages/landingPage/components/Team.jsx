import React from 'react';
import Player from './Player';
import hazel from '../../../assets/headshots/hazel-headshot.jpg';
import ian from '../../../assets/headshots/ian-headshot.jpg';
import krystal from '../../../assets/headshots/krystal-headshot.jpg';
import annie from '../../../assets/headshots/Annie_Rosen_WEB_SMALL-17.jpg';
import jeb from '../../../assets/headshots/jeb-headshot2.png';
const Team = () => {
  const team = [
    {
      name: 'Hazel Bolivar',
      src: hazel,
      // srce: '../../../assets/headshots/hazel-headshot.jpeg',
      github: 'https://github.com/hazelbolivar',
      linkedIn: 'https://www.linkedin.com/in/hazelbolivar/',
    },
    {
      name: 'Ian Flynn',
      src: ian,
      github: 'https://github.com/ian-flynn',
      linkedIn: 'https://www.linkedin.com/in/ianrflynn/',
    },
    {
      name: 'Krystal Fung',
      src: krystal,
      github: 'https://github.com/klfung7',
      linkedIn: 'https://www.linkedin.com/in/krystal-fung/',
    },
    {
      name: 'Annie Rosen',
      src: annie,
      github: 'https://github.com/mezzocarattere',
      linkedIn: 'https://www.linkedin.com/in/rosen-annie/',
    },
    {
      name: 'Jeb Stone',
      src: jeb,
      github: 'https://github.com/jeb-stone',
      linkedIn: 'https://www.linkedin.com/in/jebstone/',
    },
  ];

  const players = team.map((player) => {
    return (
      <Player
        name={player.name}
        picSrc={player.src}
        github={player.github}
        linkedIn={player.linkedIn}
      />
    );
  });
  return (
    <div id='team-box'>
      <h1>Meet the team</h1>
      <div className='team-members'>{players}</div>
    </div>
  );
};

export default Team;
