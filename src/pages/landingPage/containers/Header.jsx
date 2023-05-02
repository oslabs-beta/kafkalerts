import React from 'react';
import logo from '../../../assets/logo.png';
const Header = () => {
  return (
    <div id='header'>
      <div>
        <img src={logo} />
      </div>
      <h1>kafkAlerts</h1>
    </div>
  );
};

export default Header;
