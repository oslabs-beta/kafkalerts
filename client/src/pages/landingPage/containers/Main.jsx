import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';

const Main = () => {
  return (
    <div id='main'>
      <Hero />
      <Features />
      <Team />
    </div>
  );
};

export default Main;
// @include background(linear-gradient($color, scale-color($color, $lightness: -20%)));
