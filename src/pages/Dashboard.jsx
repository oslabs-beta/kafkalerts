import React, { useState } from 'react';
import Navbar from '../containers/NavBar';
import Feed from '../containers/Feed';
import './styles.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('Ian');
  const [alerts, setAlerts] = useState([{ name: 'Test Broker' }]);
  const [brokers, setBrokers] = useState([
    { name: 'Test Broker', metrics: ['backward overflow', 'lag', 'urp'] },
  ]);
  // const [brokers, setBrokers] = useState([]);

  return (
    <div id='dashboard-page' className='pages'>
      <Navbar loggedIn={username} />
      <Feed alerts={alerts} brokers={brokers} />
    </div>
  );
};

export default Dashboard;
