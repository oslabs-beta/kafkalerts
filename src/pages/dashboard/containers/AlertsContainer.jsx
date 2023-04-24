import React from 'react';
import Alert from '../components/Alert';

const AlertsContainer = ({ alertingBrokers }) => {
  alertingBrokers = alertingBrokers.map((broker, index) => (
    <Alert info={broker} key={index} />
  ));

  return (
    <section id='alerts-container' className='container'>
      <h2>Alerts: {alertingBrokers.length}</h2>
      <div>{alertingBrokers}</div>
    </section>
  );
};

export default AlertsContainer;
