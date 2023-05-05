import React from 'react';
import { useNavigate } from 'react-router';
import BrokerIdForm from './BrokerIdForm';

const UserMenu = ({ username, menuOpen, connectionString, handleSubmit}) => {
  const navigate = useNavigate();
  return (
    <div id='user-menu' style={{ display: menuOpen ? 'block' : 'none' }}>
      <p>Signed in as: <strong>{username}</strong></p>
      <p>Connected to: <strong>{connectionString}</strong></p>
      <BrokerIdForm handleSubmit={handleSubmit} menuOpen={menuOpen}/>
      <button id='logout' onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};
export default UserMenu;
