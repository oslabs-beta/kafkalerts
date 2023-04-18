import React, { useState } from 'react';
import Navbar from '../containers/NavBar';
import Feed from '../containers/Feed';
import './styles.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('Ian');
  const [alerts, setAlerts] = useState([]);
  const [brokers, setBrokers] = useState([
    { name: 'broker1', metrics: ['backward overflow', 'lag', 'urp'] },
  ]);
  const [brokers, setBrokers] = useState([]);

  return (
    <div id='dashboard-page' className='pages'>
      <Navbar username={username} />
      <Feed alerts={alerts} brokers={brokers} />
    </div>
  );
};

export default Dashboard;
