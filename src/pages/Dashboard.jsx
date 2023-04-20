import React, { useEffect, useState } from 'react';
import Navbar from '../containers/NavBar';
import Feed from '../containers/Feed';
import './styles.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('unknown user');
  const [alerts, setAlerts] = useState([]);
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
  const sortSplit = (brokers) => {
    const alerts = [];
    const nonAlerts = [];
    brokers.forEach((broker) => {
      for (let i = 0; i < broker.metrics.length; i++) {
        if (broker.metrics[i].alerting) return alerts.push(broker);
      }
      nonAlerts.push(broker);
    });
    return [alerts, nonAlerts];
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
        const split = sortSplit(testData);
        setAlerts(split[0]);
        setBrokers(split[1]);
      } catch (err) {
        console.log('problems getting metrics from your cluster, sorry', err);
      }
    })();
  }, []);

  return (
    <div id='dashboard-page' className='pages'>
      <Navbar loggedIn={username} />
      <Feed alerts={alerts} brokers={brokers} />
    </div>
  );
};

export default Dashboard;
