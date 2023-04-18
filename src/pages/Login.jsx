import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState('none');
  const navigate = useNavigate();

  const handleSend = async (endpoint) => {
    //TO DO: fix body so that html injection attacks can't happen
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (response.status === 200) navigate('/dashboard');
      else setErrorDisplay('block');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id='login-page'>
      <input
        type='text'
        placeholder='Username'
        onChange={(e) => {
          setErrorDisplay('none');
          setUsername(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Password'
        onChange={(e) => {
          setErrorDisplay('none');
          setPassword(e.target.value);
        }}
      />
      <p style={{ display: errorDisplay }}>Username or password incorrect</p>
      <button onClick={() => handleSend('/login')}>Log In</button>
      <button onClick={() => handleSend('/signup')}>Create Account</button>

      {/* holder code, delete later */}
      <div onClick={() => navigate('/dashboard')}>GO TO DASHBOARD</div>
    </div>
  );
};

export default Login;
