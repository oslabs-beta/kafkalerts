import React from 'react';
import AlertsContainer from './AlertsContainer';
import UserMenu from '../components/UserMenu';

const DashNav = ({ alertingBrokers, username }) => {
  return (
    <nav id='dash-nav'>
      <AlertsContainer alertingBrokers={alertingBrokers} />
      <button>LOGO</button>
    </nav>
  );
};

export default DashNav;
