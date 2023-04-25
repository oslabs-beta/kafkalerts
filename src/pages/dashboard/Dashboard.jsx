import React, { useEffect, useState } from 'react';
import '../styles.scss';
import DashNav from './containers/DashNav';
import BrokersContainer from './containers/BrokersContainer';

const Dashboard = () => {
  const [username, setUsername] = useState('unknown user');
  const [alertingBrokers, setAlertingBrokers] = useState([]);
  const [brokers, setBrokers] = useState([]);

  const testData = [
    {
      id: '1',
      topics: ['sitting', 'lounging', 'laying'],
      alerting: true,
      partitions: 47,
      metrics: ['backward overflow', 'lag', 'urp'],
    },
    {
      id: '2',
      topics: ['swimming', 'diving', 'freestyle'],
      alerting: false,
      partitions: 53,
      metrics: ['backward overflow', 'lag', 'urp'],
    },
    {
      id: '3',
      topics: ['walking', 'sprinting', 'running'],
      alerting: true,
      partitions: 61,
      metrics: ['backward overflow', 'lag', 'urp'],
    },
  ];
  const getAlerts = (brokers) => brokers.filter((broker) => broker.alerting);

  useEffect(() => {
    (async () => {
      //TO DO: set this on an interval to get data every few second or so
      try {
        const response = await fetch('http://localhost:3000/kafka', {
          method: 'POST',
          credentials: 'include',
        });
        const data = await response.json();
        //TO DO: switch to using fetched data when the backend is set up
        setAlertingBrokers(getAlerts(testData));
        setBrokers(testData);
      } catch (err) {
        setAlertingBrokers(getAlerts(testData));
        setBrokers(testData);
        console.log('problems getting metrics from your cluster, sorry', err);
      }
    })();
  }, []);

  return (
    <div id='dashboard-page' className='pages'>
      <DashNav alertingBrokers={alertingBrokers} username={username} />
      <BrokersContainer brokers={brokers} />
    </div>
  );
};

export default Dashboard;
