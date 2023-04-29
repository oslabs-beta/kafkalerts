import React, { useEffect, useState } from 'react';
import '../styles.scss';
import DashNav from './containers/DashNav';
import BrokersContainer from './containers/BrokersContainer';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
  const [username, setUsername] = useState('xXGoogleExecXx');
  const [alertingBrokers, setAlertingBrokers] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [connectionString, setConnectionString] = useState(
    'grafana.org/themetricsyouwant.forfree'
  );

  const [bytesIn, setBytesIn] = useState([]);
  const [activeBrokers, setActiveBrokers] = useState([]);
  const [urp, setUrp] = useState([]);
  const [bytesOut, setBytesOut] = useState([]);

  // [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}]
  // [{values: [[1682784224, '0'], [1682784284, '0'], [1682784344, '0'] ]}]

  const testData = [
    {
      id: '1',
      topics: ['sitting', 'lounging', 'laying'],
      alerting: true,
      partitions: 47,
      metrics: [
        { name: 'Bytes In', result: [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}] },
        { name: 'Bytes Out', result: [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}] },
        { name: 'URP', result: [{values: [[1682784224, '0'], [1682784284, '0'], [1682784344, '0'] ]}] },
      ],
    },
    {
      id: '2',
      topics: ['swimming', 'diving', 'freestyle'],
      alerting: false,
      partitions: 53,
      metrics: [
        { name: 'Bytes In', result: [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}] },
        { name: 'Bytes Out', result: [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}] },
        { name: 'URP', result: [{values: [[1682784224, '0'], [1682784284, '0'], [1682784344, '0'] ]}] },
      ],
    },
    {
      id: '3',
      topics: ['walking', 'sprinting', 'running'],
      alerting: true,
      partitions: 61,
      metrics: [
        { name: 'Bytes In', result: [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}] },
        { name: 'Bytes Out', result: [{values: [[1682784224, '1316274'], [1682784284, '1328934'], [1682784344, '1341594'] ]}] },
        { name: 'URP', result: [{values: [[1682784224, '0'], [1682784284, '0'], [1682784344, '0'] ]}] },
      ],
    },
  ];
  const getAlerts = (brokers) => brokers.filter((broker) => broker.alerting);

  const getBytesIn = async () => {
    console.log('getting Bytes In');
    // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - (20*60));
    const step = 60;
    //fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesin_total')
    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesin_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`
      );
      const data = await response.json();
      if (data) {
        setBytesIn(data.data.result);
        console.log('data has been parsed ', data);
        console.log('we have Bytes In: ', data.data.result);
      }
      // res.locals.metrics.bytesIn = data.data.result;
    } catch (err) {
      console.log('error in bytes in');
    }
  };
  // const getActiveBrokers = async () => {
  //   console.log('getting active brokers');
  //   try {
  //     const response = await fetch(
  //       'http://localhost:9090/api/v1/query?query=kafka_controller_kafkacontroller_activebrokercount'
  //     );
  //     const data = await response.json();
  //     if (data) {
  //       console.log('active brokers: ', data.data.result);
  //       setActiveBrokers(data.data.result);
  //     }
  //   } catch (err) {
  //     console.log('error getting active brokers');
  //   }
  // };
  const getUrp = async () => {
    console.log('Getting URP');
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startTimestamp = Math.floor(sevenDaysAgo.getTime() / 1000);
    const step = 86400 / 24;
    const queryURL = `http://localhost:9090/api/v1/query_range?query=kafka_server_replicamanager_underreplicatedpartitions&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`;
    // const oldQuery =
    //   'http://localhost:9090/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions';
    try {
      const response = await fetch(queryURL);
      const data = await response.json();
      if (data) {
        setUrp(data.data.result);
        console.log('we have URP: ', data.data.result);
      }
      // res.locals.metrics.urp = data.data.result;
    } catch (err) {
      console.log('error getting URP');
    }
  };
  const getBytesOut = async () => {
    console.log('getting Bytes Out');
    // window of 20 minutes, getting data in 1 minute intervals
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const startTimestamp = Math.floor(endTimestamp - (20*60));
    const step = 60;
    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesout_total&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`
      );
      const data = await response.json();
      if (data) {
        setBytesOut(data.data.result);
        console.log('we have Bytes Out: ', data.data.result);
      }

    } catch (err) {
      console.log('error getting bytes out');
    }
  };


  useEffect(() => {
    // getActiveBrokers();
    getUrp();
    getBytesIn();
    getBytesOut();
    setAlertingBrokers(getAlerts(testData));
    setBrokers(testData);
    console.log('testdata', testData);
  }, []);

  

  return (
    <div id='dashboard-page' className='pages'>
      <DashNav
        alertingBrokers={alertingBrokers}
        username={username}
        connectionString={connectionString}
        key={uuidv4()}
      />
      <BrokersContainer brokers={brokers} key={uuidv4()} />
    </div>
  );
};

export default Dashboard;
