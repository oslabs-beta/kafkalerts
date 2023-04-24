import React from 'react';
import Broker from '../components/Broker';

const BrokersContainer = ({ brokers }) => {
  // map array of brokers into container
  //TO DO: change keys to something better than indexes
  const displayBrokers = brokers.map((broker, index) => (
    <Broker
      showing={false}
      name={broker.name}
      key={'broker' + index}
      metrics={broker.metrics}
    />
  ));
  return (
    <section id='brokers-container' className='container'>
      {displayBrokers}
    </section>
  );
};

export default BrokersContainer;
