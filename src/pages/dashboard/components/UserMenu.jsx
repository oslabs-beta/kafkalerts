import React from 'react';
import { useNavigate } from 'react-router';

const UserMenu = ({ username, menuOpen, connectionString }) => {
  const navigate = useNavigate();
  return (
    <div id='user-menu' style={{ display: menuOpen ? 'block' : 'none' }}>
      <p>{username}</p>
      <p>{connectionString}</p>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};
export default UserMenu;
