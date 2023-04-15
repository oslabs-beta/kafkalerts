import React from 'react';
import Navbar from '../containers/NavBar';
import Feed from '../containers/Feed';
import './style.scss';

const Dashboard = () => {
  return (
    <div id='dashboard-page'>
      <Navbar />
      <Feed />
    </div>
  );
};

export default Dashboard;
