import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id='hero'>
      <span>kafkAlerts</span>
      <h1>Driven by usability.</h1>
      <p>Broker metric monitoring and alerting for your Kafka cluster</p>
      <button onClick={() => navigate('/login')}>Connect A Cluster</button>
    </div>
  );
};

export default Hero;
