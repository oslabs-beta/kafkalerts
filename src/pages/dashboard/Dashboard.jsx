import React, { useEffect, useState } from 'react';
import '../styles.scss';
import DashNav from './containers/DashNav';
import BrokersContainer from './containers/BrokersContainer';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
  const [username, setUsername] = useState('xXGoogleExecXx');
  const [connectionString, setConnectionString] = useState(
    'grafana.org/themetricsyouwant.forfree'
  );
  const [brokerIds, setBrokerIds] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]);
  const [brokersAndAlerts, setBrokersAndAlerts] = useState([]);

  useEffect(() => {
    // TO DO: change temp messages to three relevant messages
    const tempErrorMessages = [
      'temp error message 1',
      'temp error message 2',
      'temp error message 3',
    ];
    Promise.all(
      brokerIds.map(async (brokerId) => {
        try {
          const response = await fetch('prometheus');
          const jsonResponse = await response.json();
          return [jsonResponse];
        } catch (err) {
          console.log('error getting alert info for broker ', brokerId);
          return {
            brokerId: brokerId,
            alerts:
              brokerId === '2' || brokerId === '4' || brokerId === '9'
                ? [tempErrorMessages[(brokerId - 1) % 3]]
                : [],
          };
        }
      })
    ).then((values) => setBrokersAndAlerts(values));
  }, []);

  return (
    <div id='dashboard-page' className='pages'>
      <DashNav
        brokers={brokersAndAlerts}
        username={username}
        connectionString={connectionString}
        key={uuidv4()}
      />
      <BrokersContainer brokers={brokersAndAlerts} key={uuidv4()} />
    </div>
  );
};

export default Dashboard;
