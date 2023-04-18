import React from 'react';
import Link from './components/Link';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  const navigate = useNavigate();
  let navItems = [<h1 style={{ 'flexGrow': 1 }}>kafkAlerts</h1>];
  if (loggedIn) {
    navItems.push(
      <nav>
        <p>{loggedIn}</p>
        <Link onPress={() => navigate('/')}>Logout</Link>
      </nav>
    );
    navItems.unshift(<Link onPress={() => navigate('/dashboard')}>Home</Link>);
  }
  return <div id='navbar-container'>{navItems}</div>;
};

export default Navbar;
