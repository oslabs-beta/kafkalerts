import React from 'react';
import Link from '../components/Link';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  const navigate = useNavigate();
  let navItems = [<h1 key={'why key'}>kafkAlerts</h1>];
  if (loggedIn) {
    navItems.push(
      <nav key={'1'}>
        <p>{loggedIn}</p>
        {/* TO DO: change keys to something meaningful */}
        <Link onPress={() => navigate('/')}>Logout</Link>
      </nav>
    );
    navItems.unshift(
      <Link key={'2'} onPress={() => navigate('/dashboard')}>
        Home
      </Link>
    );
  }
  return <div id='navbar-container'>{navItems}</div>;
};

export default Navbar;
