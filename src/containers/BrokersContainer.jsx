import React from 'react';
import Broker from './components/Broker';

const BrokersContainer = ({ brokers }) => {
  // map array of brokers into container
  const displayBrokers = brokers.map((broker, index) => {
    //TO DO: change keys to something better than indexes
    return <Broker name={broker.name} key={index} metrics={broker.metrics} />;
  });
  return (
    <section id='brokers-container' className='container'>
      <h2>Brokers</h2>
      {displayBrokers}
    </section>
  );
};

export default BrokersContainer;
