import React, { useState } from 'react';
import AlertsContainer from './AlertsContainer';
import UserMenu from '../components/UserMenu';
import logo from '../../../assets/logo.png';
import {v4 as uuidv4} from 'uuid'

const DashNav = ({ alertingBrokers, username, connectionString }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav id='dash-nav'>
      <AlertsContainer alertingBrokers={alertingBrokers} key={uuidv4()}/>
      <button
        id='user-menu-button'
        onClick={toggleMenu}
        style={{ backgroundColor: menuOpen ? 'grey' : 'antiquewhite' }}
      >
        <img src={logo} alt='KA' />
      </button>
      <UserMenu
        username={username}
        menuOpen={menuOpen}
        connectionString={connectionString}
      />
    </nav>
  );
};

export default DashNav;
