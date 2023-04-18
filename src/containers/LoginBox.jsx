import React from 'react';
import TextField from './components/TextField';
import Button from './components/Button';
const LoginBox = ({ setPassword, setUsername, handleSend }) => {
  return (
    <div id='login-container'>
      <TextField label='Username: ' onChange={setUsername} isRequired />
      <TextField label='Password: ' onChange={setPassword} isRequired />
      <div id='button-box'>
        <Button onPress={() => handleSend('login')}>Login</Button>
        <Button onPress={() => handleSend('signup')}>Create Account</Button>
      </div>
    </div>
  );
};

export default LoginBox;
