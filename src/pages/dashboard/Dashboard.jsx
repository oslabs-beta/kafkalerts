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
      name: 'Alerting-Test-Broker',
      id: 1,
      metrics: [
        { stat: 'backward overflow', alerting: true },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: true },
      ],
    },
    {
      name: 'All-Good-Test-Broker',
      id: 2,
      metrics: [
        { stat: 'backward overflow', alerting: false },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: false },
      ],
    },
    {
      name: 'Second-Alerting-Test-Broker',
      id: 3,
      metrics: [
        { stat: 'backward overflow', alerting: false },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: true },
      ],
    },
  ];
  const getAlerts = (brokers) => {
    return brokers.filter((broker) => {
      for (let i = 0; i < broker.metrics.length; i++) {
        if (broker.metrics[i].alerting) return true;
      }
    });
  };

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
        setAlerts(getAlerts(testData));
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
