import React, { useEffect, useState } from 'react';
import '../styles.scss';
import DashNav from './containers/DashNav';
import BrokersContainer from './containers/BrokersContainer';

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
      metrics: [{name: 'Bytes In'}, {name: 'Bytes Out'}, {name: 'URP'}],
    },
    {
      id: '2',
      topics: ['swimming', 'diving', 'freestyle'],
      alerting: false,
      partitions: 53,
      metrics: [{name: 'Bytes In'}, {name: 'Bytes Out'}, {name: 'URP'}],
    },
    {
      id: '3',
      topics: ['walking', 'sprinting', 'running'],
      alerting: true,
      partitions: 61,
      metrics: [{name: 'Bytes In'}, {name: 'Bytes Out'}, {name: 'URP'}],
    },
  ];
  const getAlerts = (brokers) => brokers.filter((broker) => broker.alerting);

  useEffect(() => {
    (async () => {
      //TO DO: set this on an interval to get data every few second or so
      try {
        const response = await fetch('http://localhost:3001/kafka');
        const data = await response.json();
        //TO DO: switch to using fetched data when the backend is set up
        console.log('metrics in Dashboard - ', data);
        // for each broker assign respective metrics from data object
        testData.forEach(broker => {
          broker.metrics[0].result = data.bytesIn;
          broker.metrics[1].result = data.bytesOut;
          broker.metrics[2].result = data.urp;
        })
        console.log('this is the test data: ', testData)
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
      />
      <BrokersContainer brokers={brokers} />
    </div>
  );
};

export default Dashboard;
