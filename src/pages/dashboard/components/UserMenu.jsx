import React from 'react';
import { useNavigate } from 'react-router';
import BrokerIdForm from './BrokerIdForm';

const UserMenu = ({ username, menuOpen, connectionString, handleSubmit}) => {
  const navigate = useNavigate();
  return (
    <div id='user-menu' style={{ display: menuOpen ? 'block' : 'none' }}>
      <p>{username}</p>
      <p>{connectionString}</p>
      <BrokerIdForm handleSubmit={handleSubmit}/>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};
export default UserMenu;
