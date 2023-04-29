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
  const [brokerIds, setBrokerIds] = useState(['1', '2', '3']);

  return (
    <div id='dashboard-page' className='pages'>
      <DashNav
        alertingBrokers={alertingBrokers}
        username={username}
        connectionString={connectionString}
        key={uuidv4()}
      />
      <BrokersContainer
        brokerIds={brokerIds}
        brokers={brokers}
        key={uuidv4()}
      />
    </div>
  );
};

export default Dashboard;
