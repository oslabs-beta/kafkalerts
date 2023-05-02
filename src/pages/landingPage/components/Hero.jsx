import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id='hero'>
      <h1>kafkAlerts</h1>
      <h2>Driven by accessibility.</h2>
      <h3>Broker metric monitoring and alerting for your Kafka cluster</h3>
      <button onClick={() => navigate('/login')}>Connect A Cluster</button>
    </div>
  );
};

export default Hero;
