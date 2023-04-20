import React from 'react';
import Broker from './components/Broker';

const BrokersContainer = ({ alerts, brokers }) => {
  // map array of brokers into container
  //TO DO: change keys to something better than indexes
  const displayBrokers = [
    ...alerts.map((broker, index) => (
      <Broker
        name={broker.name}
        showing={true}
        key={'alert' + index}
        metrics={broker.metrics}
      />
    )),
    ...brokers.map((broker, index) => (
      <Broker
        showing={false}
        name={broker.name}
        key={'broker' + index}
        metrics={broker.metrics}
      />
    )),
  ];
  return (
    <section id='brokers-container' className='container'>
      <h2>Brokers</h2>
      {displayBrokers}
    </section>
  );
};

export default BrokersContainer;
