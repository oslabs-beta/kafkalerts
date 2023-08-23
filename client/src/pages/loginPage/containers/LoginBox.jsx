import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const LoginBox = ({ setPassword, setUsername, handleSend }) => {
  const navigate = useNavigate();
  return (
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
  );
};

export default LoginBox;
