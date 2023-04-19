import React from 'react';
import Alert from './components/Alert';

const AlertsContainer = ({ brokers }) => {
  const alertsArr = brokers.map((alert, index) => {
    return <Alert info={alert} key={index} />;
  });
  return (
    <section id='alerts-container' className='container'>
      <h2>Alerts: {brokers.length}</h2>
      <ul>{alertsArr}</ul>
    </section>
  );
};

export default AlertsContainer;
// be passinate engineer that loves to build/ that's it
//ask them about their job, so they don't feel like they are wasting
//where does project strategy originate, etc

//so tell me about yourself
//dont make up on the spot,
//dont care about personal life, they want, what's your tech story
//always finish your narrative with a question?
//keep a story diary
