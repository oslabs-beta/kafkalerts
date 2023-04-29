import React from 'react';
import Broker from '../components/Broker';
import { v4 as uuidv4 } from 'uuid';

const BrokersContainer = ({ brokerIds }) => {
  const displayBrokers = brokerIds.map((brokerId) => {
    return <Broker id={brokerId} key={uuidv4()} />;
  });
  return <section id='brokers-container'>{displayBrokers}</section>;
};

export default BrokersContainer;
