import { useNavigate } from 'react-router';
import BrokerIdForm from './BrokerIdForm';

const UserMenu = ({ username, menuOpen, connectionString, handleSubmit }) => {
  const navigate = useNavigate();
  return (
    <div id='user-menu' className={menuOpen ? 'open' : 'closed'}>
      <h4>
        Welcome, <strong>{username}</strong>
      </h4>
      <p>
        Connected: <strong>{connectionString}</strong>
      </p>
      <BrokerIdForm handleSubmit={handleSubmit} menuOpen={menuOpen} />
      <button id='logout' onClick={() => navigate('/')}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
