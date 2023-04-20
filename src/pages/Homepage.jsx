import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import TextField from '../containers/components/TextField.jsx';
import Button from '../containers/components/Button.jsx';
import { usePress } from 'react-aria';
import Navbar from '../containers/NavBar';
import LoginBox from '../containers/LoginBox';

const Homepage = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState('none');
  const navigate = useNavigate();

  const handleSend = async (endpoint) => {
    //TO DO: fix body so that html injection attacks can't happen
    try {
      console.log(username, password, endpoint);
      const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      console.log(response.status);
      if (response.status === 200) navigate('/dashboard');
      else setErrorDisplay('block');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id='homepage' className='pages loginForm'>
      <Navbar />
      <LoginBox
        setUsername={setUsername}
        setPassword={setPassword}
        handleSend={handleSend}
      />
      {/* TO DO: delete this */}
      <button onClick={() => navigate('/dashboard')}>
        Temp button to go to dashboard easily
      </button>
    </div>
  );
};
export default Homepage;
