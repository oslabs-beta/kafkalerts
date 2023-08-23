import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../RootPage/components/TextField';
import Button from '../RootPage/components/Button';

const LoginPage = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState('none');
  const navigate = useNavigate();

  const handleSend = async (endpoint) => {
    //TO DO: fix body so that html injection attacks can't happen
    try {
      console.log(username, password, endpoint);
      const response = await fetch(`/api/${endpoint}`, {
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
    <div id='login-page' className='pages'>
      <div id='login-container'>
        <TextField
          id='username'
          label='Username: '
          onChange={setUsername}
          isRequired
        />
        <TextField
          id='password'
          label='Password: '
          onChange={setPassword}
          isRequired
        />
        <div id='account-buttons'>
          <Button id='login' onPress={() => handleSend('login')}>
            Login
          </Button>
          <Button id='signup' onPress={() => handleSend('signup')}>
            Sign up
          </Button>
        </div>
        <hr />
        <Button id='demo-button' onClick={() => navigate('/dashboard')}>
          See a Demo!
        </Button>
      </div>
    </div>
  );
};
export default LoginPage;
