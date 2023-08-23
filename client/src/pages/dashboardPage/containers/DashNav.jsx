import React, { useState } from 'react';
import AlertsContainer from './AlertsContainer';
import UserMenu from '../components/UserMenu';
import logo from '../../../assets/logo.png';
import { v4 as uuidv4 } from 'uuid';

const DashNav = ({ brokers, username, connectionString, handleSubmit }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav id='dash-nav'>
      <AlertsContainer brokers={brokers} key={uuidv4()} />
      <button
        id='user-menu-button'
        onClick={toggleMenu}
        style={{ backgroundColor: menuOpen ? 'grey' : '#ff6b35' }}
      >
        <img src={logo} alt='KA' />
      </button>
      <UserMenu
        username={username}
        menuOpen={menuOpen}
        connectionString={connectionString}
        handleSubmit={handleSubmit}
      />
    </nav>
  );
};

export default DashNav;
