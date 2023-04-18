import React from 'react';
import Broker from './components/Broker';

const BrokersContainer = ({ brokers }) => {
  // map array of brokers into container
  const displayBrokers = brokers.map((broker) => {
    // console.log('broker name is... ', broker.name);
    return <Broker name={broker.name} metrics={broker.metrics} />;
  });
  return (
    <section id='brokers-container'>
      <h2>Brokers</h2>
      {displayBrokers}
    </section>
  );
};

export default BrokersContainer;
