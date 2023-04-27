import React from 'react';
import Alert from '../components/Alert';
import {v4 as uuidv4} from 'uuid'

const AlertsContainer = ({ alertingBrokers }) => {
  alertingBrokers = alertingBrokers.map((broker, index) => (
    <Alert info={broker} key={uuidv4()} />
  ));

  return (
    <section id='alerts-container' className='container'>
      <h2>Alerting Brokers by ID:</h2>
      {alertingBrokers}
    </section>
  );
};

export default AlertsContainer;
