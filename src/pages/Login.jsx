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
      await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        // credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      })
      .then(res => res.json())
      .then(res => {
        console.log(res.isVerified)
        if (res.isVerified) navigate('/dashboard');
        else if (!res.isVerified) console.log('Username already exists.');
      })
      // console.log('response.status', response.status)
      // if (response.locals.isVerified) navigate('/dashboard');
      // else if (!response.locals.isVerified) console.log('Username already exists.');
      // else setErrorDisplay('block');
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
        style={{margin: '5%'}}
      />
      <input
        type='text'
        placeholder='Password'
        onChange={(e) => {
          setErrorDisplay('none');
          setPassword(e.target.value);
        }}
      />
      <p style={{ display: errorDisplay }}>{errorDisplay}</p>
      <button style={{margin: '5%'}} onClick={() => handleSend('login')}>Log In</button>
      <button onClick={() => handleSend('signup')}>Create Account</button>

      {/* holder code, delete later */}
      {/* <div onClick={() => navigate('/dashboard')}>GO TO DASHBOARD</div> */}
    </div>
  );
};

export default Login;
