import React from 'react';
import Alert from './components/Alert';

const AlertsContainer = ({ alerts }) => {
  const alertsArr = alerts.map((alert, index) => {
    return <Alert info={alert} key={index} />;
  });
  return (
    <section id='alerts-container' className='container'>
      <h2>Alerts: {alerts.length}</h2>
      <ul>{alertsArr}</ul>
    </section>
  );
};

export default AlertsContainer;
