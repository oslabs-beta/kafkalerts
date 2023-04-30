import React from 'react';
import Broker from '../components/Broker';
import { v4 as uuidv4 } from 'uuid';

const BrokersContainer = ({ brokers }) => {
  const displayBrokers = brokers.map((broker) => {
    return (
      <Broker id={broker.brokerId} alerts={broker.alerts} key={uuidv4()} />
    );
  });
  return <section id='brokers-container'>{displayBrokers}</section>;
};

export default BrokersContainer;
