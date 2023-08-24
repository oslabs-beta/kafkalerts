import React from 'react';
import logo from '../../../assets/logo.png';
const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} />
      </div>
      <h1>kafkAlerts</h1>
    </header>
  );
};

export default Header;
