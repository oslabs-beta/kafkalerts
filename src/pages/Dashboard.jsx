import React, { useEffect, useState } from 'react';
import Navbar from '../containers/NavBar';
import Feed from '../containers/Feed';
import './styles.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('IAN');
  const [alerts, setAlerts] = useState([{ name: 'Test Broker' }]);
  const [brokers, setBrokers] = useState([]);

  const testData = [
    {
      name: 'Alerting-Test-Broker',
      metrics: [
        { stat: 'backward overflow', alerting: true },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: true },
      ],
    },
    {
      name: 'All-Good-Test-Broker',
      metrics: [
        { stat: 'backward overflow', alerting: false },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: false },
      ],
    },
    {
      name: 'Second-Alerting-Test-Broker',
      metrics: [
        { stat: 'backward overflow', alerting: false },
        { stat: 'lag', alerting: false },
        { stat: 'urp', alerting: true },
      ],
    },
  ];
  useEffect(() => {
    (async () => {
      //TO DO: set this on an interval to get data every few second or so
      try {
        const response = await fetch('http://localhost:3000/kafka', {
          method: 'POST',
          credentials: 'include',
        });
        const data = await response.json();
        setBrokers(testData);
        //TO DO: switch to this when the backend is getting data
        // setBrokers(data)
      } catch (err) {
        console.log('problems getting metrics from your cluster, sorry', err);
      }
    })();
  }, []);

  return (
    <div id='dashboard-page' className='pages'>
      <Navbar loggedIn={username} />
      <Feed brokers={brokers} />
    </div>
  );
};

export default Dashboard;
