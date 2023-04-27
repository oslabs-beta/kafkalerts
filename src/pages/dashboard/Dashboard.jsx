import React, { useEffect, useState } from 'react';
import '../styles.scss';
import DashNav from './containers/DashNav';
import BrokersContainer from './containers/BrokersContainer';
import {v4 as uuidv4} from 'uuid'

const Dashboard = () => {
  const [username, setUsername] = useState('xXGoogleExecXx');
  const [alertingBrokers, setAlertingBrokers] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [connectionString, setConnectionString] = useState(
    'grafana.org/themetricsyouwant.forfree'
  );

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
      <DashNav
        alertingBrokers={alertingBrokers}
        username={username}
        connectionString={connectionString}
        key={uuidv4()}
      />
      <BrokersContainer brokers={brokers} key={uuidv4()}/>
    </div>
  );
};

export default Dashboard;
