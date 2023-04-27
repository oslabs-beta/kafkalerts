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
      name: 'Alerting-Test-Broker',
      metrics: [
        { stat: 'Bytes In', alerting: true },
        { stat: 'Bytes Out', alerting: false },
        { stat: 'URP', alerting: true },
      ],
    },
    // {
    //   name: 'All-Good-Test-Broker',
    //   metrics: [
    //     { stat: 'Bytes In', alerting: false },
    //     { stat: 'Bytes Out', alerting: false },
    //     { stat: 'URP', alerting: false },
    //   ],
    // },
    // {
    //   name: 'Second-Alerting-Test-Broker',
    //   metrics: [
    //     { stat: 'Bytes In', alerting: false },
    //     { stat: 'Bytes Out', alerting: false },
    //     { stat: 'URP', alerting: true },
    //   ],
    // },
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
        const response = await fetch('http://localhost:3001/kafka');
        const data = await response.json();
        //TO DO: switch to using fetched data when the backend is set up
        console.log('metrics - ', data);
        // for each broker assign respective metrics from data object
        testData.forEach(broker => {
          broker.metrics[0].result = data.bytesIn;
          broker.metrics[1].result = data.bytesOut;
          broker.metrics[2].result = data.urp;
        })
        console.log(testData)
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
