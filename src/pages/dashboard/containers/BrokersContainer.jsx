import React from 'react';
import Broker from '../components/Broker';
import { v4 as uuidv4 } from 'uuid';

const BrokersContainer = ({ brokerIds, brokers }) => {
  // map array of brokers into container
  //TO DO: change keys to something better than indexes
  // const displayBrokers = brokers.map((broker, index) => (
  //   <Broker
  //     showing={false}
  //     id={broker.id}
  //     key={uuidv4()}
  //     metrics={broker.metrics}
  //     brokerData={broker}
  //   />
  // ));
  const displayBrokers = brokerIds.map((brokerId) => {
    return <Broker id={brokerId} key={uuidv4()} />;
  });
  return <section id='brokers-container'>{displayBrokers}</section>;
};

export default BrokersContainer;
