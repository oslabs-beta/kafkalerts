import React from 'react';
import Player from './Player';

const Team = () => {
  const team = [
    {
      name: 'Hazel Bolivar',
      src: '../assets/headshots/hazel-headshot.jpeg',
      github: 'https://github.com/hazelbolivar',
      linkedIn: 'https://www.linkedin.com/in/hazelbolivar/',
    },
    {
      name: 'Ian Flynn',
      src: '../assets/ian-headshot.jpeg',
      github: 'https://github.com/ian-flynn',
      linkedIn: 'https://www.linkedin.com/in/ianrflynn/',
    },
    {
      name: 'Krystal Fung',
      src: '../assets/krystal-headshot.jpeg',
      github: 'https://github.com/klfung7',
      linkedIn: 'https://www.linkedin.com/in/krystal-fung/',
    },
    {
      name: 'Annie Rosen',
      src: '../assets/Annie_Rosen_WEB_SMALL-17.jpg',
      github: 'https://github.com/mezzocarattere',
      linkedIn: 'https://www.linkedin.com/in/rosen-annie/',
    },
    {
      name: 'Jeb Stone',
      src: '../assets/jeb-headshot.png',
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
    <div>
      <h1>Team Comp </h1>
      <div className='team-members'>{players}</div>
    </div>
  );
};

export default Team;
