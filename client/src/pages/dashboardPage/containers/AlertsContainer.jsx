import React from 'react';
import Alert from '../components/Alert';
import { v4 as uuidv4 } from 'uuid';

const AlertsContainer = ({ brokers }) => {
  const alertingBrokers = brokers.map((broker, index) =>
    broker.alerts.length ? (
      <Alert broker={broker.brokerId} key={uuidv4()} />
    ) : null
  );

  return (
    <div id='alerts-container'>
      <h2>Alerting Brokers:</h2>
      {alertingBrokers}
    </div>
  );
};

export default AlertsContainer;
