import React from 'react';
import Alert from './components/Alert';

const AlertsContainer = ({ brokers }) => {
  brokers = brokers.map((broker, index) => <Alert info={broker} key={index} />);

  return (
    <section id='alerts-container' className='container'>
      <h2>Alerts: {brokers.length}</h2>
      <div>{brokers}</div>
    </section>
  );
};

export default AlertsContainer;
